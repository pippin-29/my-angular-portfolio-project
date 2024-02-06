import { Component, NgModule } 	from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component ({
	selector: 'app-tornado',
	templateUrl: 'tornado.component.html', 
	styleUrl: 'tornado.component.css'
	
})

export class TornadoComponent {
	data:	any;

	constructor(private http: HttpClient) {
		this.initializeMap();
	}

	initializeMap() {
		

		const apiUrl: string = `https://api.spacexdata.com/v5/launches/latest`;
		
		this.http.get(apiUrl).subscribe(
			(response) => {
				this.data = response;
				console.log('Received data:', response); 
			},
			(error) => { console.log('error data:', error )}
		);
	}
}
