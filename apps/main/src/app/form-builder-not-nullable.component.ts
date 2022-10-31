import {Component, inject, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

interface ControlModel {
  name: FormControl<string>
}

@Component({
  selector: 'angular-form-builder-not-nullable',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <form [formGroup]="form" class="form">
      <label for="form-control-nullable">Form builder Not Nullable</label>
      <input class="input" id="form-control-nullable" formControlName="name">

      <button class="button" (click)="resetFormControl()">Reset Form Control Nullable</button>
      <span>formControlNullable value=> {{form.value.name}}</span>
      <span>formControlNullable value is null => {{form.value.name === null}}</span>
      <span>formControlNullable value is '' => {{form.value.name === ''}}</span>

    </form>
  `,
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input {
      width: 150px;
    }

    .button {
      width: 300px;
    }
  `
  ]
})
export class FormBuilderNotNullableComponent implements OnInit {

  form!: FormGroup<ControlModel>;
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.formBuilder.group<ControlModel>({
      name: this.formBuilder.nonNullable.control<string>('some value')
    });
  }

  resetFormControl() {
    this.form.controls.name.reset();
  }
}
