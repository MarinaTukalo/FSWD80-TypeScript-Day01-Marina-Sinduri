var breakfast = [{ 'food': 'pancakes', 'drinks': 'coffee', 'price': '10' }, { 'food': 'omelet', 'drinks': 'coffee', 'price': '15' }, { 'food': 'waffles', 'drinks': 'tea', 'price': '12' }];
var breakfastFood = [];
document.getElementById("breakfast").addEventListener("click", function () {
    var i = 1;
    for (var _i = 0, breakfast_1 = breakfast; _i < breakfast_1.length; _i++) {
        var value = breakfast_1[_i];
        document.getElementById("result").innerHTML += "Food: " + value.food + " Drinks: " + value.drinks + " Price: " + value.price + "<button id='btn" + i + "' class='m-2 btn btn-warning'>Add</button><br>";
        i++;
    }
});
// document.getElementsByClassName("btn").addEventListener("click",function(){
// });
