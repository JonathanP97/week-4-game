var hero;
var villain;
var heroSelected = false;
var villainSelected = false;
var livesTaken = [];

function Hero(name, health, attack, letter) {
   this.name = name,
   this.health = health, 
   this.attack = attack,
   this.letter = letter,
   this.display = function(src) {
   	  $('#heroName').html(this.name);
   	  $('#heroPicked').attr('src', src);
   	  updateHeroHp();
   }
}

function Villain(name , health, attack, letter) {
   this.name = name,
   this.health = health, 
   this.attack = attack,
   this.letter = letter,
   this.display = function(src) {
   	  $('#villainName').html(this.name);
   	  $('#villainPicked').attr('src', src);
   	  updateVillainHp();
   }
}

function updateHeroHp() {
	$(".heroHp").css("display", "initial");
	$(".heroHp").animate({width: hero.health + 'px'}, "show");
	$("#heroPicked").css("display","initial");
	$('#healthStat').html(hero.health);
   	$('#attackStat').html(hero.attack);
}

function updateVillainHp() {
	$(".villainHp").css("display", "initial");
	$(".villainHp").animate( {width: villain.health+'px'}, "show" );
}

$(document).ready( function() {
  
   $('.hero').hover( function() {
   	   var h = $(this).attr("hero");
   	   switch(h) {
   	   	  case 'a':
   	   	  	$('#charStats').css("background-color", "powderblue");
   	   	  	$('#charHp').html("Health: 90");
   	   	  	$('#charAtt').html("Attack: 10");
   	   	  	break;
   	   	  case 'b':
   	   	  	$('#charStats').css("background-color", "orange");
   	   	  	$('#charHp').html("Health: 125");
   	   	  	$('#charAtt').html("Attack: 6");
   	   	  	break;
   	   	  case 'c':
   	   	  	$('#charStats').css("background-color", "yellow");
   	   	  	$('#charHp').html("Health: 150");
   	   	  	$('#charAtt').html("Attack: 3");
   	   	  	break;
   	   	  case 'd':
   	   	  	$('#charStats').css("background-color", "khaki");
   	   	  	$('#charHp').html("Health: 75");
   	   	  	$('#charAtt').html("Attack: 12");
   	   	  	break;

   	   }

   });

   $('.hero').on("click", function()  {
   	  // console.log(this);
	 if(!heroSelected) { 
		  var letter = $(this).attr('hero');
		  
		  switch(letter) {
		  	case 'a':
		  	   hero = new Hero("Hero A", 90, 10, letter);
		  	   break;
		  	case 'b':
		  	   hero = new Hero("Hero B", 125, 6, letter);
		  	   break;
		  	case 'c':
		  	   hero = new Hero("Hero C", 150, 3, letter);
		  	   break;
		  	case 'd':
		  	   hero = new Hero("Hero D", 75, 12, letter);
		  	   break;
		  }
		  // console.log(hero);
		  hero.display(this.src);
		  heroSelected = true;
	  } else { console.log("hero already chosen");}
   });

   $('.villain').on("click", function() {
     if(!villainSelected) {
     	console.log(this);
     	var letter = $(this).attr('villain');
		  
		  switch(letter) {
		  	case 'a':
		  	   villain = new Villain("Villain A", 90, 10, letter);
		  	   break;
		  	case 'b':
		  	   villain = new Villain("Villain B", 125, 6, letter);
		  	   break;
		  	case 'c':
		  	   villain = new Villain("Villain C", 150, 3, letter);
		  	   break;
		  	case 'd':
		  	   villain = new Villain("Villain D", 75, 12, letter);
		  	   break;
		  }
		  villain.display();
		  villainSelected = true;
     } else {
     	console.log("current villain still alive");

     }
   });

   $('.attackButton').on("click", function() {

   	if(heroSelected && villainSelected && hero.health>0 && villain.health>0 ) {
	   // console.log(hero);
	   // console.log(villain);
	   villain.health -= hero.attack;
	   hero.health -= villain.attack;

	   hero.attack += 2;
	   updateHeroHp();
	   updateVillainHp();

     } else {
       // if(livesTaken.length != )
     	if(villain.health === 0 || villain.health < 0) {

     	   if(livesTaken[(livesTaken.length -1)] != villain.letter) livesTaken.push(villain.letter);
     	   villainSelected = false;	
     	   console.log(livesTaken.length);
     	   $('.vil-' + villain.letter ).css("background-color", "black");

     	}
     }

   });
   
});

// function Hero(health, att, lett) {
// 	this.health = health,
// 	this.att = att,
// 	this.letter = lett,

// }

// $(document).on("click","img", function() {

// 	heroLetter = ( $(this).attr("hero") );
// 	console.log(heroLetter);

// 	if(heroLetter == "no" && !enemySelected) {
// 		heroLetter = ($(this).attr("en"));
// 		setEnemy( heroLetter );
// 	}else if(!heroSelected) {
// 		setHero(heroLetter);
// 	}

// })
// //Attack Button 
// $(document).on("click", "h4", function() {
// 	var hpBar = $(".enemyHp");

// 	if($(this).attr("class") == "attackButton") {
// 		enemy.health -= hero.attack;
// 		hero.attack += 5;

// 		hpBar.animate({width: enemy.health + 'px'}, 800);

// 		console.log("Enemy HP: " + enemy.health);
// 		console.log("Hero Attack: "+ hero.attack);
// 		enemyTurn();

// 		if(enemy.health < 0) {
// 			newEnemy(enemy.letter);
// 		}
// 	}
// })

// function setHero() {

// 	if(heroLetter== 'a') {
// 		hero = heroA;
// 		$('.heroName').html("Hero A");
// 		$('.heroPicked').attr("src", "./assets/images/orange.jpeg");
// 	} else if(heroLetter== 'b') {
// 		hero = heroB;
// 		$('.heroName').html("Hero B");
// 		$('.heroPicked').attr("src", "./assets/images/apple.jpg");
// 	} else if(heroLetter== 'c') {

// 	} else if(heroLetter=='d') {

// 	}
// 	$(".heroHp").css("display", "initial");
// 	$(".heroHp").animate({width: hero.health + 'px'}, "show");
// 	$(".heroPicked").css("display","initial");
// 	heroSelected = true;	
// }

// function setEnemy(e) {

// 	var enemyCheck = enemyDefeated.indexOf(e);
// 	if (enemyCheck === -1) {

// 		if(e == 'a') {
// 			enemy = enemyA;
// 			$('.enemyName').html("Chips");
// 			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
// 		}else if(e == 'b') {
// 			enemy = enemyB;
// 			$('.enemyName').html("Candy");
// 			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
// 		}else if(e == 'c') {
// 			enemy = enemyC;
// 			$('.enemyName').html("Ice Cream");
// 			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
// 		}else if(e == 'a') {
// 			enemy = enemyD;
// 			$('.enemyName').html("Chips");
// 			$('.enemyPicked').attr("src", "./assets/images/kingChip.jpg");
// 		}
// 	}
// 	$(".enemyPicked").css("display","initial");
// 	console.log("enemy is "+ enemy);

// 	$(".enemyHp").css("display","initial");
// 	$(".enemyHp").animate({width: enemy.health + 'px'}, "show");	
// 	enemySelected = true;
// }

// function enemyTurn() {
// 	var hpBar = $(".heroHp");
// 	hero.health -= enemy.counterAttack;
// 	hpBar.animate({width: hero.health + 'px'}, 800);
// }

// function newEnemy(letter) {
// 	enemyDefeated.push(letter);
// 	alert("Defeat another enemy!");
// 	enemySelected = false;

// 	var num = enemyDefeated.indexOf(letter);
// 	if(num=== -1) {
		
// 	}
// }