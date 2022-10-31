import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormRecord, ReactiveFormsModule} from '@angular/forms';

interface ControlModel {
  name: FormControl<string>,
  languages: FormRecord<FormControl<string>>
}

@Component({
  selector: 'angular-typed-form-form-record',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `

    <form [formGroup]="form" class="form" (ngSubmit)="addLanguage()">
      <label for="form-control-nullable">Form Record</label>
      <input class="input" id="form-control-nullable" formControlName="name">
      <button>Add language</button>
    </form>


    <ul>
      <li *ngFor="let lang of Object.keys(form.value.languages!)">
        {{form.value.languages?.[lang]}}
      </li>
    </ul>
  `,
  styles: []
})

export class FormRecordComponent implements OnInit {

  form!: FormGroup<ControlModel>;
  formBuilder = inject(FormBuilder);
  Object = Object;

  ngOnInit(): void {
    this.form = this.formBuilder.group<ControlModel>({
      name: this.formBuilder.nonNullable.control<string>('english'),
      languages: this.formBuilder.record<FormControl<string>>({english: this.formBuilder.nonNullable.control<string>('english')})
    });
  }

  addLanguage() {
    const language = this.form.value.name as string;
    this.form.controls.languages.addControl(language, this.formBuilder.nonNullable.control<string>(language))
  }

}
