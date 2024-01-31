


import { Component } from "@angular/core";

@Component ({
	selector:	'app-calculator',
	templateUrl:	'calculator.component.html',
	styleUrl:	'calculator.component.css'
})

export class CalculatorComponent {
	opout: string = '';
	output: number = 0;
	previous: number = 0;
	operator: string = '';
	result: number = 0;

	push_digit(input: string)
	{
		if (!this.operator)
		{
			this.output = (this.output * 10) + parseInt(input, 10);
			this.opout = this.opout + this.output;
		}	
		else
		{
			this.opout = this.opout + ' ' + this.output;
			if (this.operator === '/')
				this.result = this.previous / this.output;
			else if (this.operator === '-')
				this.result = this.previous - this.output;
			else if (this.operator === '+')
				this.result = this.previous + this.output;
			else if (this.operator === '*')
				this.result = this.previous * this.output;
			if (this.operator === '=')
				this.output = this.result;
			this.operator = '';
		}
	this.previous = this.output;	
	}
	push_op(input:string) 
	{
		
		if (input === 'C')
		{
			this.output = 0;
			this.opout = '';
		}
		else if (this.output && input === 'sq')
			this.output *= this.output;
		else if (this.output && input === 'sqrt')
			this.output /= this.output;
		else
		{
			this.output = 0;
			this.operator = input;
		}
		this.opout = this.opout + ' ' + this.operator;
	}
}
