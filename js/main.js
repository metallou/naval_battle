"use strict"

const launchGame = {};

const toggleSelect = function() {
	let item = this;
	item.classList.toggle('selected');
}

const setOnClick = function(elem) {
	let selectors = document.querySelectorAll(elem);

  for (let selector of selectors) {
  	selector.addEventListener('click', toggleSelect);
  }
}

launchGame.playerVsEasy = function() {
	let gridP1 = new Grid("self"),
	    gridP2 = new Grid("botEasy");


	console.log(gridP1.visualise());
	console.log(gridP2);
}

const mainReady = function()
{

  setOnClick('button');

	document.getElementById('start')
	        .addEventListener('click', launchGame.playerVsEasy);

}
document.addEventListener("DOMContentLoaded", mainReady);
