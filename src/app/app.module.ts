import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { SideColumnComponent } from './components/side-column/side-column.component';
	import { FolderComponent } from './components/side-column/folder/folder.component';
	
import { MainColumnComponent } from './components/main-column/main-column.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


@ NgModule({

declarations: [
	AppComponent,
	SideColumnComponent,
		FolderComponent,

	MainColumnComponent,
	HeaderComponent
],

imports: [
	BrowserModule,
	AppRoutingModule
],

bootstrap: [AppComponent]

})

export class AppModule { }