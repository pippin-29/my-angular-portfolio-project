import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
/// ^^^ node_modules ^^^ ///


import { C_ProjectsComponent } from "./components/nav/c_projects/c_projects.component";
/// ^^^ components for display within main column ^^^ ///


const routes: Routes = [
	{ path: 'components/nav/c_projects', component: C_ProjectsComponent }
]; /// ^^^ definition of routes array, will contain the path to relevant component ^^^ ///

@NgModule({
	imports: [RouterModule.forRoot(routes)], // standard configuration of RouterModule
	exports: [RouterModule] 				// for export
})

export class AppRoutingModule { } // find in app.module.ts