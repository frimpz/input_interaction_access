var modal = $('#myAlert');
$("#savebtn").click(function() { 
	$(modal).show();
});

$("#_close").click(function() { 
	$(modal).hide();
});
$(window).click(function(event) {
	 if (event.target.id == modal.attr('id')) {
    	$(modal).hide();
  }
});