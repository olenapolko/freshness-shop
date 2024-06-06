import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FilterConfig} from '../../interfaces/filter-config.interface';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {Subject} from 'rxjs';
import {takeUntil, debounceTime} from 'rxjs/operators';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MIN_PRICE, MAX_PRICE} from '../../../pages/products/constants/constants';
import {FieldType} from '../../enums/field-type.enum';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() config!: FilterConfig;
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm!: FormGroup;
  FieldType = FieldType;
  subscr$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.createForm();
    this.filterForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.subscr$))
      .subscribe((value) => this.onFilterChange(value));
  }

  onFilterChange(value: any): void {
    const transformedValue = this.transformFormValues(value);
    this.filtersChanged.emit(transformedValue);
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
    switch (field.type) {
      case FieldType.CHECKBOX:
        return new FormArray(field.options!.map(() => new FormControl(false)));
      case FieldType.SLIDER:
        return new FormGroup({
          min: new FormControl(field.min),
          max: new FormControl(field.max)
        });
      default:
        return new FormControl('');
    }
  }

  createForm(): FormGroup {
    const group: any = {};
    this.config.fields.forEach((field) => {
      group[field.name] = this.formControlResolver(field);
    });
    return this.fb.group(group);
  }

  updateSlider(event: Event, formItemId: string, control: string): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.filterForm.get(formItemId)?.get(control)?.patchValue(+value);
    this.filterForm.markAsDirty();
  }

  resetForm() {
    this.filterForm.reset();
    this.filterForm.patchValue({
      price: {
        min: MIN_PRICE,
        max: MAX_PRICE
      }
    });
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
