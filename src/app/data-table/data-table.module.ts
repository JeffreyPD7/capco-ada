import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';

import { SampleDataComponent } from './components/sample-data/sample-data.component';
import { ExtraCreditComponent } from './components/extra-credit/extra-credit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sample-data', component: SampleDataComponent },
      { path: 'extra-credit', component: ExtraCreditComponent },
    ]),
    SharedModule
  ],
  declarations: [
    SampleDataComponent,
    ExtraCreditComponent
  ]
})
export class DataTableModule { }
