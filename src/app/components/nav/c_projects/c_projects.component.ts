/* The C_ProjectsComponent should be renamed. it has been repurposed.
	It now contains html specific to an AI generated story.

	The selector is not used anywhere in verbose form.
	This component is specified within app-routing.module.ts
	And routerLink is placed within SideColumnComponent
	So that this component can display within the Main Column.
*/

import { Component } from "@angular/core";

@Component({
	selector: 'app-c-data-test',
	templateUrl: './c_projects.component.html',
	styleUrl: './c_projects.component.css'
})

export class C_ProjectsComponent { } // find in app.module.ts