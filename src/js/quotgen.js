'use strict';

//Quote generator class
export default class QuotGen {
	
	constructor(quotArr) {
		let length = quotArr.length;
		let numberArr = Math.round(length*Math.random());
		this.quotes = quotArr[numberArr];

	}

	

	get quotLat() {

		return this.quotes.quotLat;

	}

	get quotEng() {

		return this.quotes.quotEng;

	}

	get author() {

		return this.quotes.author;
	}
}
