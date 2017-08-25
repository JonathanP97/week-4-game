var heroLetter;
var heroSelected = false;
var enemySelected = false;
var hero;

var heroA = {
	health: 100,
	attack: 5,
}
var heroB = {
	health: 120,
	attack: 4,
}

var enemyA = {
	health: 100,
	counterAttack: 5,
}

$(document).on("click","img", function() {

	heroLetter = ( $(this).attr("hero") );
	console.log(heroLetter);

	if(heroLetter == "no" && !enemySelected) {
		heroLetter = ($(this).attr("en"));
		setEnemy( heroLetter );
	}else if(!heroSelected) {
		setHero(heroLetter);
	}

})

$(document).on("click", "h4", function() {

	var hpBar = $(".enemyHp");
	var objClass = $(this).attr("class");

	if(objClass == "attackButton") {
		alert("btn works");
		enemyA.health -= hero.attack;
		hero.attack += 5;

		hpBar.animate({width: enemyA.health + 'px'}, "show");

		alert(enemyA.health);
		alert(hero.attack);
	}
})

function setHero() {
	if(heroLetter== 'a') {
		hero = heroA;
		$('.heroName').html("Hero A");
		$('.heroPicked').attr("src", "./assets/images/orange.jpeg");
	} else if(heroLetter== 'b') {
		hero = heroB;
		$('.heroName').html("Hero B");
		$('.heroPicked').attr("src", "./assets/images/apple.jpg");
	} else if(heroLetter== 'c') {

	} else if(heroLetter=='d') {

	}

	heroSelected = true;	
}

function setEnemy(e) {
	if(e == 'a') {
		$('.enemyName').html("Chips");
		$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
	}else if(e == 'b') {
		$('.enemyName').html("Candy");
		// $('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
	}else if(e == 'c') {
		$('.enemyName').html("Ice Cream");
		$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
	}else if(e == 'a') {
		$('.enemyName').html("Chips");
		$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
	}

	enemySelected = true;
}