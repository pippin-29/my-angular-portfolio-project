// json-format.pipe.ts is intended to format a 
// standard json file inserted in html.

import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
	name: 'jsonFormat'
})

export class JsonFormatPipe implements PipeTransform {
	transform(value: any): string {
		return JSON.stringify(value, null, 2).replace(/,/g, ',\n');
	}
}