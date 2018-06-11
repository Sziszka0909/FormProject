$(document).ready(function () {
	$(".button").click( function() {
		setFieldsToDefault();
		var inputsIsOk = checkInputFields();
		ajaxCallSuccess = false;
		TimeoutSuccess = false;
		if(inputsIsOk == true) {
			ajaxCallMethod();
			setTimeout(getNumberOfInputs, 3000);
		}
	})
});

function checkInputFields() {
	var name = $(".name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var introducing = $(".introducing").val();
	if(name == ""){
		$(".name").css("border", "1px solid red");
		$(".nameError").css("visibility", "visible");
		return false;
	};
	if(email == ""){
		$(".email").css("border", "1px solid red");
		$(".emailError").css("visibility", "visible");
		return false;
	};
	if(phone == ""){
		$(".phone").css("border", "1px solid red");
		$(".phoneError").css("visibility", "visible");
		return false;
	};
	if(introducing == ""){
		$(".introducing").css("border", "1px solid red");
		$(".introducingError").css("visibility", "visible");
		return false;
	};
	
	return true;
}

function setFieldsToDefault() {
	$(".name").css("border", "");
	$(".nameError").css("visibility", "hidden");

	$(".email").css("border", "");
	$(".emailError").css("visibility", "hidden");

	$(".phone").css("border", "");
	$(".phoneError").css("visibility", "hidden");

	$(".introducing").css("border", "");
	$(".introducingError").css("visibility", "hidden");
	
	$(".successful").css("visibility", "hidden");
	$(".successful").css("marginLeft", "0px" );
	
	ajaxCallSuccess = false;
	TimeoutSuccess = false;
}

String.prototype.nice = function() {
	return this.toUpperCase();
}

function getNumberOfInputs() {
	console.log($(":input").length);
	TimeoutSuccess = true;
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
				$(".name").css("border", "1px solid red");
				$(".nameError").css("visibility", "visible");
				
				$(".introducing").css("border", "1px solid red");
				$(".introducingError").css("visibility", "visible");
			} else if(data == "2"){
				$(".name").css("border", "1px solid red");
				$(".nameError").css("visibility", "visible");
			} else if(data == "3"){
				$(".introducing").css("border", "1px solid red");
				$(".introducingError").css("visibility", "visible");
			}else if (data == "0"){
				ajaxCallSuccess = true;
				executeSuccess();
			}
		}
	})
}

function executeSuccess() {
	if(TimeoutSuccess == true && ajaxCallSuccess == true){
		$(".successful").css("visibility", "visible");
		$(".successful").animate({marginLeft: "+=200px"});
	}
}