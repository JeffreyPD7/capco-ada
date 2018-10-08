import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableSharedComponent} from './components/table-shared/table-shared.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableSharedComponent],
  exports: [
    TableSharedComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}

