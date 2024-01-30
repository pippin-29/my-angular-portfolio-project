/*	The MainColumnComponent can be seen as a dynamic item,
	it will display anything that is specified on path within
	app-routing.module.ts
	Currently The styling allows for compatibility up to 1920 x 1080 displays,
	it will not populate an entire 4k screen.
	The selector is placed within app.component.html
*/

import { Component } from "@angular/core";


@Component({
	selector: 'app-main-column',
	templateUrl: './main-column.component.html',
	styleUrl: './main-column.component.css'
})


export class MainColumnComponent { } // find in app.module.ts