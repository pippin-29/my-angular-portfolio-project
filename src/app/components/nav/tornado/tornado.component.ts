import { Component } 	from "@angular/core";

import * as L 			from 'leaflet';

@Component ({
	selector: 'app-tornado',
	templateUrl: 'tornado.component.html', 
	styleUrl: 'tornado.component.css'
})

export class TornadoComponent {
	
	map:	any;

	constructor() {
		this.initializeMap();
	}

	initializeMap() {

	}
}
