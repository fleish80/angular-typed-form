import {Component, inject, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'angular-form-builder-not-nullable',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <form [formGroup]="form" class="form">
      <label for="form-control-nullable">Untyped</label>
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
export class UntypedComponent implements OnInit {

  form!: FormGroup;
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new UntypedFormControl('some value')
    });
  }

  resetFormControl() {
    this.form.controls['name'].reset();
  }
}
