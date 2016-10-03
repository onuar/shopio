import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {
  AppComponent,
  ShoppingListComponent,
  ListButtonComponent,
  HomeComponent,
  LoginComponent
} from './Components';

import { ListService, ComponentStateManagerService } from './Services';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ListButtonComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ListService, ComponentStateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
