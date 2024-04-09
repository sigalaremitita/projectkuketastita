import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  
  ],
  exports:[
    ConnectionComponent
  ]
})
export class CoreModule { }
