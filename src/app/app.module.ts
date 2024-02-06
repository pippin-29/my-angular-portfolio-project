/* app.module.ts contains app-specific components and routing-modules
	as well as platform-specific modules and services
	components must be declared towards the NgModule (core angular module)
	and any app-required modules must be imported
	the bootstrap specifies a generically labelled AppComponent,
	whereby a selector is named and placed within the index.html,
	this selector <app-root> will essentially be the container for all
	html files that are specified (via templateUrl:) within components that
	are declared in this module, or within modules that are imported here.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/// ^^^ node_modules ^^^ ///

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TornadoModule } from './components/nav/tornado/tornado.module';
/// ^^^ app-specific module(s) ^^^ ///


import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideColumnComponent } from './components/side-column/side-column.component';
import { MainColumnComponent } from './components/main-column/main-column.component';
import { FolderComponent } from './components/folder/folder.component';
import { FooterComponent } from './components/footer/footer.component';
/// ^^^ custom components ^^^ ///


@ NgModule({
declarations: [
	AppComponent,
	SideColumnComponent,
	FolderComponent,
	MainColumnComponent,
	HeaderComponent,
	FooterComponent,
],

imports: [
	BrowserModule,
	TornadoModule,
	AppRoutingModule,
	HttpClientModule
],

bootstrap: [AppComponent]

})

export class AppModule { } // find in main.ts