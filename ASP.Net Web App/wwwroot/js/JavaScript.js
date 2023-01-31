// document.getElementById("btnSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value +
//        ", Subject: " + document.getElementById("txtSubject").value +
//        ", Message: " + document.getElementById("txtMessage").value);
//})
$("#btnSend").click(function () {
	// Getting input from user into height variable.
	let assignments = $("#assignments").val() * .50;
	let project = $("#project").val() * .10;
	let quiz = $("#quiz").val() * .10;
	let mid = $("#mid").val() * .10;
	let fin = $("#fin").val() * .10;
	let intex = $("#intex").val() * .10;
	let grades = "";
	// Input is string so typecasting is necessary. */
	let percentage = (assignments + project + quiz + mid + fin + intex);
	// Checking the condition for the providing the
	// grade to student based on percentage
	if (percentage >= 94) {
		grades = "A";
	} else if (percentage < 94 && percentage >= 90) {
		grades = "A-";
	} else if (percentage < 90 && percentage >= 87) {
		grades = "B+";
	} else if (percentage < 87 && percentage >= 84) {
		grades = "B";
	} else if (percentage < 84 && percentage >= 80) {
		grades = "B-";
	} else if (percentage < 80 && percentage >= 77) {
		grades = "C+";
	} else if (percentage < 77 && percentage >= 74) {
		grades = "C";
	} else if (percentage < 74 && percentage >= 70) {
		grades = "C-";
	} else if (percentage < 70 && percentage >= 67) {
		grades = "D+";
	} else if (percentage < 67 && percentage >= 64) {
		grades = "D";
	} else if (percentage < 64 && percentage >= 60) {
		grades = "D-";
	} else {
		grades = "E";
	}
	$('#showdata').html(percentage + "% " + grades);
});