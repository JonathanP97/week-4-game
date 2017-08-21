$(document).ready( function() {
	var points = 0;
	var targetNumber;

	var boxA = 1;
	var boxB;
	var boxC;
	var boxD;
	getImageNumbers();

	$("#imgA").on("click", function() {
		points += boxA;
		$(".points").html(points);
	});

	$("#imgB").on("click", function() {
		points += boxB;
		$(".points").html(points);
	});

	$("#imgC").on("click", function() {
		points += boxC;
		$(".points").html(points);
	});

	$("#imgD").on("click", function() {
		points += boxD;
		$(".points").html(points);
	});	

	function getImageNumbers() {
		
	}
});