import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { SideColumnComponent } from './components/side-column/side-column.component';
import { MainColumnComponent } from './components/main-column/main-column.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserModule } from '@angular/platform-browser';

@ NgModule({

declarations: [
	AppComponent,
	SideColumnComponent,
	MainColumnComponent,
	HeaderComponent
],

imports: [
	BrowserModule,
],

bootstrap: [AppComponent]

})

export class AppModule { }