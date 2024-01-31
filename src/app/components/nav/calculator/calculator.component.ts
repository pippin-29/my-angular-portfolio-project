


import { Component } from "@angular/core";

@Component ({
	selector:	'app-calculator',
	templateUrl:	'calculator.component.html',
	styleUrl:	'calculator.component.css'
})

export class CalculatorComponent {
	opout: string = '';
	output: number = 0;

	push_digit(input: string)
	{
		this.output = (this.output * 10) + parseInt(input, 10);
	}
	push_op(input:string) 
	{
		this.opout = input;
	}
			

}
