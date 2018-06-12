$(document).ready(function () {
	$(".button").click( function() {
		setFieldsToDefault();
		var inputsIsOk = checkInputFields();
		ajaxCallSuccess = false;
		timeoutSuccess = false;
		if(inputsIsOk == true) {
			ajaxCallMethod();
			setTimeout(getNumberOfInputs, 3000);
		}
	})
});

function checkInputFields() {
	var errorCounter = 0;
	var name = $(".name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var introducing = $(".introducing").val();
	if(name == ""){
		$(".name").setRedTheBorder();
		$(".nameError").setVisible();
		errorCounter++;
	};
	if(email == ""){
		$(".email").setRedTheBorder();
		$(".emailError").setVisible();
		errorCounter++;
	};
	if(phone == ""){
		$(".phone").setRedTheBorder();
		$(".phoneError").setVisible();
		errorCounter++;
	};
	if(introducing == ""){
		$(".introducing").setRedTheBorder();
		$(".introducingError").setVisible();
		errorCounter++;
	};
	
	if (errorCounter == 0){
		return true;
	}
	return false;
}

function setFieldsToDefault() {
	$(".name").setBorderToDefault();
	$(".nameError").setHidden();

	$(".email").setBorderToDefault();
	$(".emailError").setHidden();

	$(".phone").setBorderToDefault();
	$(".phoneError").setHidden();

	$(".introducing").setBorderToDefault();
	$(".introducingError").setHidden();

	$(".successful").setHidden();
	$(".successful").setMarginLeftToZero();
	
	ajaxCallSuccess = false;
	timeoutSuccess = false;
}

String.prototype.nice = function() {
	return this.toUpperCase();
}

function getNumberOfInputs() {
	console.log($(":input").length);
	timeoutSuccess = true;
	executeSuccess();
}

function ajaxCallMethod() {
	var introducing = $(".introducing").val();
	var name = $(".name").val();
	$.ajax({
		method: "GET",
		url: "MyServlet",
		data: { "introducing": introducing, "name": name },
		
		success: function(data) {
			if(data == "1"){
				$(".name").setRedTheBorder();
				$(".nameError").setVisible();
				
				$(".introducing").setRedTheBorder();
				$(".introducingError").setVisible();
			} else if(data == "2"){
				$(".name").setRedTheBorder();
				$(".nameError").setVisible();
			} else if(data == "3"){
				$(".introducing").setRedTheBorder();
				$(".introducingError").setVisible();
			}else if (data == "0"){
				ajaxCallSuccess = true;
				executeSuccess();
			}
		}
	})
}

function executeSuccess() {
	if(timeoutSuccess == true && ajaxCallSuccess == true){
		$(".successful").setVisible();
		$(".successful").animateToMarginLeft();
	}
}