import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {Subject} from 'rxjs';
import {takeUntil, debounceTime} from 'rxjs/operators';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {FieldType} from '@shared/enums/field-type.enum';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() config!: FilterConfig;
  @Output() formChanged = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();
  dynamicForm!: FormGroup;
  FieldType = FieldType;
  subscr$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicForm = this.createForm();
    this.dynamicForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.subscr$))
      .subscribe((value) => this.onFormChange(value));
  }

  onFormChange(value: any): void {
    const transformedValue = this.transformFormValues(value);
    this.formChanged.emit(transformedValue);
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.dynamicForm.value);
    console.log(this.dynamicForm);
  }

  private transformFormValues(value: any): any {
    const transformedValue = {...value};

    for (const field of this.config.fields) {
      if (field.type === FieldType.CHECKBOX) {
        const selectedOptions = value[field.name]
          .map((checked: boolean, index: number) => (checked ? field.options?.[index] : null))
          .filter((value: any) => value !== null);
        transformedValue[field.name] = selectedOptions;
      }
    }

    return this.removeEmptyFields(transformedValue);
  }

  private removeEmptyFields(value: any): any {
    const filteredValue: any = {};
    for (const key in value) {
      if (value[key].length === 0) {
        continue;
      }
      filteredValue[key] = value[key];
    }
    return filteredValue;
  }

  private formControlResolver(field: any) {
    const validators = field.validators || [];
    switch (field.type) {
      case FieldType.CHECKBOX:
        return new FormArray(field.options!.map(() => new FormControl(false)));
      case FieldType.SLIDER:
        return new FormGroup({
          min: new FormControl(field.min),
          max: new FormControl(field.max)
        });
      default:
        return new FormControl('', validators);
    }
  }

  createForm(): FormGroup {
    const group: any = {};
    this.config.fields.forEach((field) => {
      group[field.name] = this.formControlResolver(field);
    });
    return this.fb.group(group, {validators: this.matchPasswordValidator()});
  }

  private matchPasswordValidator(): any {
    return (formGroup: FormGroup) => {
      const password = formGroup.get('password');
      const confirmPassword = formGroup.get('confirmPassword');
      if (formGroup.controls['confirmPassword']) {
        if (
          formGroup.controls['confirmPassword'].value === null ||
          formGroup.controls['confirmPassword'].value === ''
        ) {
          return null;
        } else {
          if (password && confirmPassword && password.value !== confirmPassword.value) {
            confirmPassword?.setErrors({mismatch: true});
          } else {
            confirmPassword?.setErrors(null);
          }
        }
      }
      return null;
    };
  }

  isFormValid(): boolean {
    return this.dynamicForm.valid;
  }

  updateSlider(event: Event, formItemId: string, control: string): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.dynamicForm.get(formItemId)?.get(control)?.patchValue(+value);
    this.dynamicForm.markAsDirty();
  }

  ngOnDestroy(): void {
    this.subscr$.next();
    this.subscr$.complete();
  }

  getIcons(rating: number): string[] {
    const filledStars = Array(rating).fill('star');
    const emptyStars = Array(5 - rating).fill('star_border');
    return [...filledStars, ...emptyStars];
  }
}
