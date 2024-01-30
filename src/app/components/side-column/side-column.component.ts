/*	SideColumnComponent contains links for the navigation of the SPA
	(single-page application).
	side-column.component.html contains the <app-folder> selector
	specified in the FolderComponent.
	This component is where routerLinks will be placed.
	The styling defines a maximum width and x and y scrolling(overflow).
	text placed within this bar will not wrap,
	so keep text relatively short(within reason).

	(for the future)-[lean to drag a divider]
*/

import { Component } from "@angular/core";

@Component({
	selector: 'app-side-column',
	templateUrl: './side-column.component.html',
	styleUrl: './side-column.component.css'
})

export class SideColumnComponent {
		isSideColumnVisible = true;

		toggleSideColumn() {
			this.isSideColumnVisible = !this.isSideColumnVisible;
		}
	} // find in app.module.ts