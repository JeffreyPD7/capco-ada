import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SampleDataComponent } from './components/sample-data/sample-data.component';
import { ExtraCreditComponent } from './components/extra-credit/extra-credit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SampleDataComponent, ExtraCreditComponent]
})
export class DataTableModule { }
