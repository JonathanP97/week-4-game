$(document).ready( function() {
	var points = 0;
	var targetNumber;
	var wins = 0;
	var losses = 0;

	var boxA = 0;
	var boxB = 0;
	var boxC = 0;
	var boxD = 0;

	getNumbers();

	$(document).on("click", "img", function() {

		var imageClicked = $(this).attr("letter");

		console.log("Gem clicked:" + $(this).attr("letter") );

		if(imageClicked == 'a') {
			points += boxA;
			console.log(boxA);
		} else if(imageClicked == 'b') {
			points += boxB;
			console.log(boxB);
		} else if(imageClicked == 'c') {
			points += boxC;
			console.log(boxC);
		} else if(imageClicked == 'd') {
			points += boxD;
			console.log(boxD);
		}

		$(".points").html(points);

		if(points == targetNumber) {
			wins++;
			$(".win").html(wins);

			getNumbers();
		} else if(points > targetNumber) {
			losses++;
			$(".loss").html(losses);

			getNumbers();
		}

	});

	function getNumbers() {
		
		boxA = Math.floor((Math.random() * 12) + 1);		
		boxB = Math.floor((Math.random() * 12) + 1);
		boxC = Math.floor((Math.random() * 12) + 1);
		boxD = Math.floor((Math.random() * 12) + 1);

		targetNumber = Math.floor((Math.random() * 101) +19);
		$(".rN").html(targetNumber);

		points = 0;
		$(".points").html(points);
	}
});