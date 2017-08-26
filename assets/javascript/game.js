var heroLetter;
var heroSelected = false;
var enemySelected = false;
var hero;
var enemy;
var enemyDefeated = [];

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
	letter: 'a',
}

var enemyB = {
	health: 160,
	counterAttack: 4,
	letter: 'b',
}

var enemyC = {
	health: 80,
	counterAttack: 15,
	letter: 'c',
}

var enemyD = {
	health: 150,
	counterAttack: 12,
	letter: 'd',
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
//Attack Button 
$(document).on("click", "h4", function() {
	var hpBar = $(".enemyHp");

	if($(this).attr("class") == "attackButton") {
		enemy.health -= hero.attack;
		hero.attack += 5;

		hpBar.animate({width: enemy.health + 'px'}, 800);

		console.log("Enemy HP: " + enemy.health);
		console.log("Hero Attack: "+ hero.attack);
		enemyTurn();

		if(enemy.health < 0) {
			newEnemy(enemy.letter);
		}
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
	$(".heroHp").css("display", "initial");
	$(".heroHp").animate({width: hero.health + 'px'}, "show");
	$(".heroPicked").css("display","initial");
	heroSelected = true;	
}

function setEnemy(e) {

	var enemyCheck = enemyDefeated.indexOf(e);
	if (enemyCheck === -1) {

		if(e == 'a') {
			enemy = enemyA;
			$('.enemyName').html("Chips");
			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
		}else if(e == 'b') {
			enemy = enemyB;
			$('.enemyName').html("Candy");
			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
		}else if(e == 'c') {
			enemy = enemyC;
			$('.enemyName').html("Ice Cream");
			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
		}else if(e == 'a') {
			enemy = enemyD;
			$('.enemyName').html("Chips");
			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
		}
	}
	$(".enemyPicked").css("display","initial");
	console.log("enemy is "+ enemy);

	$(".enemyHp").css("display","initial");
	$(".enemyHp").animate({width: enemy.health + 'px'}, "show");	
	enemySelected = true;
}

function enemyTurn() {
	var hpBar = $(".heroHp");
	hero.health -= enemy.counterAttack;
	hpBar.animate({width: hero.health + 'px'}, 800);
}

function newEnemy(letter) {
	enemyDefeated.push(letter);
	alert("Defeat another enemy!");
	enemySelected = false;

	var num = enemyDefeated.indexOf(letter);
	if(num=== -1) {
		
	}
}