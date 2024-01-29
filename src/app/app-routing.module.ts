import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { C_ProjectsComponent } from "./components/nav/c_projects/c_projects.component";
import { FileViewComponent } from "./components/file-view/file-view.component";




	const routes: Routes = [
	{ path: 'components/file-view', component: FileViewComponent },
	{ path: 'components/nav/c_projects', component: C_ProjectsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule { }