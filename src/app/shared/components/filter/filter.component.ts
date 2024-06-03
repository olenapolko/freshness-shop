import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FilterConfig} from '../../interfaces/filter-config.interface';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {Subject, takeUntil, debounceTime} from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MIN_PRICE, MAX_PRICE} from '../../../pages/products/constants';
import {FieldType} from '../../enums/field-type.enum';

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
    MatButtonModule
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() config!: FilterConfig;
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm!: FormGroup;
  FieldType = FieldType;
  subscr$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.filterForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.subscr$))
      .subscribe((value) => this.onFilterChange(value));
  }

  onFilterChange(value: any): void {
    this.filtersChanged.emit(value);
  }

  createForm() {
    const group: any = {};
    this.config.fields.forEach((field) => {
      if (field.type === 'checkbox') {
        group[field.name] = new FormArray(field.options!.map(() => new FormControl(false)));
      } else if (field.type === 'slider') {
        group[field.name] = new FormGroup({
          min: new FormControl(field.min),
          max: new FormControl(field.max)
        });
      } else {
        group[field.name] = new FormControl('');
      }
    });
    this.filterForm = this.fb.group(group);

    this.filterForm.valueChanges.subscribe((value) => {
      this.filtersChanged.emit(value);
    });
  }

  updateSlider(event: Event, formItemId: string, control: string): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.filterForm.get(`${formItemId}`)?.get(`${control}`)?.patchValue(+value);
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
}
