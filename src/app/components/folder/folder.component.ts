/*	The FolderComponent has been designed to allow expansion and collapsion
	of links.
	This is still being designed.
	Currently the folder lists are not links.
*/

import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-folder',
	templateUrl: './folder.component.html',
	styleUrl: './folder.component.css'
})

export class FolderComponent { // find in app.module.ts
	@Input() folderName: string = '';

	@Input() files: string[] = [];

	isCollapsed = true;

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
	}

}