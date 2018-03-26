export class Ingredients {
	public name : string;
	public amount : number;
	constructor (name : string, amount : number) {
		this.name = name;
		this.amount = amount;
	}
	//Or
	//constructor (public name : string, amount : number) {}
}