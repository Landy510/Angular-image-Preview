import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileComponent } from './file.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [FileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    FileComponent
  ]
})
export class FileModule { }
