// folder.component.ts

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.component.html',
	styleUrl: './folder.component.css'
})

export class FolderComponent {
	@Input() folderName: string = '';

	@Input() files: string[] = [];
	@Input() subfolders: { name: string; files: string[] }[] = [] // doesn't work yet
	isCollapsed = true;

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
	}
}