import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from './shared/ui-components/pagination/pagination.module';
import { TagsInputModule } from './shared/ui-components/tags-input/tags-input.module';
@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    TagsInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
