var breakfast = [{'food':'pancakes','drinks':'coffee','price':'10'},{'food':'omelet','drinks':'coffee','price':'15'},{'food':'waffles','drinks':'tea','price':'12'}];

var breakfastFood: Array<string> = [];

document.getElementById("breakfast").addEventListener("click", function(){
	let i=1;
	for(var value of breakfast){
	document.getElementById("result").innerHTML += `Food: ${value.food} Drinks: ${value.drinks} Price: ${value.price}<button id='btn${i}' class='m-2 btn btn-warning'>Add</button><br>`;
	i++;
	}

});

// document.getElementsByClassName("btn").addEventListener("click",function(){

// });