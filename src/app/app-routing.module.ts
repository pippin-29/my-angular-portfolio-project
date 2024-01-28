import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { C_ProjectsComponent } from "./components/nav/c_projects/c_projects.component";
import { HomeComponent } from "./components/nav/home/home.component";



	const routes: Routes = [
	{ path: 'components/nav/home', component: HomeComponent },
	{ path: 'components/nav/c_projects', component: C_ProjectsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule { }