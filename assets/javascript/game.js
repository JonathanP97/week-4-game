var hero;
var villain;
var heroSelected = false;
var villainSelected = false;
var livesTaken = [];
$('.status').hide();

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
            $("#charName").html("Mace Windu");
   	   	  	$('#charHp').html("Health: 90");
   	   	  	$('#charAtt').html("Attack: 10");
   	   	  	break;
   	   	  case 'b':
   	   	  	$('#charStats').css("background-color", "orange");
            $("#charName").html("Luke Skywalker");
   	   	  	$('#charHp').html("Health: 125");
   	   	  	$('#charAtt').html("Attack: 6");
   	   	  	break;
   	   	  case 'c':
   	   	  	$('#charStats').css("background-color", "yellow");
            $("#charName").html("Qui Gon Jinn");
   	   	  	$('#charHp').html("Health: 150");
   	   	  	$('#charAtt').html("Attack: 3");
   	   	  	break;
   	   	  case 'd':
   	   	  	$('#charStats').css("background-color", "pink");
            $("#charName").html("Obi Wan Kenobi");
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
		  	   hero = new Hero("Mace Windu", 90, 10, letter);
		  	   break;
		  	case 'b':
		  	   hero = new Hero("Luke Skywalker", 125, 6, letter);
		  	   break;
		  	case 'c':
		  	   hero = new Hero("Qui Gon Jinn", 150, 3, letter);
		  	   break;
		  	case 'd':
		  	   hero = new Hero("Obi Wan Kenobi", 75, 12, letter);
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
		  	   villain = new Villain("Count Dooku", 90, 10, letter);
		  	   break;
		  	case 'b':
		  	   villain = new Villain("General Grievous", 125, 6, letter);
		  	   break;
		  	case 'c':
		  	   villain = new Villain("Darth Maul", 150, 3, letter);
		  	   break;
		  	case 'd':
		  	   villain = new Villain("Darth Vader", 75, 12, letter);
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
     	if(villain.health === 0 || villain.health < 0) {

     	   if(livesTaken[(livesTaken.length -1)] != villain.letter) livesTaken.push(villain.letter);
     	   villainSelected = false;
         // console.log(livesTaken);
         $('.status').show();
         $('.msg').html(villain.name + " has been slain");	
     	   console.log(livesTaken.length);
     	   $('.vil-' + villain.letter ).css("background-color", "black");
         $('.vil-' + villain.letter ).attr("src", " ");
     	}
     }

   });
   
});