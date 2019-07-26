var modal = $('#myAlert');
var status = 0;
$("#savebtn").click(function() { 
	if( $('#email').val()=='' || !validateEmail($('#email').val())) { 
		$('#status').text("Error");
		$('#message').text("Invalid Email Address");
		$("#status").removeClass("sent");
		$("#message").removeClass("sent");
		$("#status").addClass("error");
		$("#message").addClass("error");
		status = 0;
		$(modal).show();
	}
	else{
		$('#status').text("Sent");
		$('#message').text("Thank you for reading my blog!");
		$("#status").removeClass("error");
		$("#message").removeClass("error");
		$("#status").addClass("sent");
		$("#message").addClass("sent");
		status = 1;
		$(modal).show();
	}
	
	
});



$("#_close").click(function() { 
	$(modal).hide();
	if(status == 1){
		clear();
	}
	else{
		 $("#email").focus();
	}
	
});
$(window).click(function(event) {
	 if (event.target.id == modal.attr('id')) {
	 	$(modal).hide();
	 	if(status == 1){
		clear();
	}
	else{

    	 $("#email").focus();
  }
	}
});

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

function validatePhone($phone) {
  var phoneReg = (/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
  return phoneReg.test( $phone );
}

function clear() {
	$('#name').val("");
	$('#phone').val("");
	$('#email').val("");
	$('#comment').val("");
}
