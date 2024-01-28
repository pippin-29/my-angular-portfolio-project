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
	isCollapsed = true;

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
	}
}