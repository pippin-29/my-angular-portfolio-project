import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-view',

  templateUrl: './file-view.component.html',
  styleUrl: './file-view.component.css'
})
export class FileViewComponent implements OnInit {
	fileId: string = '';
	fileContent: string = '';

	constructor(private route: ActivatedRoute, private http: HttpClient) {}

	navigateToAnotherComponent(fileId: string): void {
		this.router.navigate(['src/assets/files/yosh.i/source', fileId]);
	}

	ngOnInit(): void {
		const fileIdParam = this.route.snapshot.paramMap.get('id');

		if (fileIdParam !== null)
			this.fileId = fileIdParam;
		this.loadFileContent();

	}

	loadFileContent(): void {

		const fileUrl = '/src/assets/files/yosh.i/source/$(this.fileID}.c';

		this.http.get(fileUrl, { responseType: 'text' }).subscribe(
			(content) => {
			  this.fileContent = content;
			},
			(error) => {
			  console.error('Error fetching file content', error);
			}
		  );
	}
}
