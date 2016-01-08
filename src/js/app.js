//calculation and output data
import {quotes} from "./quotes";
import QuotGen from "./quotgen";
function btnClick() {
	let quote = new QuotGen(quotes);
	document.getElementById("lat-quote").innerHTML = `<h3>${quote.quotLat}</h3>`;
	document.getElementById("eng-quote").innerHTML = `<h3>${quote.quotEng}</h3>`;
	document.getElementById("author-name").innerHTML = `${quote.author}`;
	}

function ready() {
	let btnMain = document.getElementsByClassName("btn-main");
	mainBtn.addEventListener("click", btnClick);
}


document.addEventListener("DOMContentLoaded", ready);

