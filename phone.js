$(document).ready(function() { // do this when the document is loaded
	$("#_dialer").show(); // show the element with ID "element"
	$("#_contact").hide(); // hide the element with ID "otherElement"
	$("#_add").hide(); // hide the element with ID "otherElement"

	 $(".btns").click(function () {
        $(".btns").removeClass("btn_active")
            $(this).addClass("btn_active");
    });
});

$("#dialer_tab").click(function() { // when "button_id" is clicked
	$("#_dialer").show(); // show the element with ID "element"
	$("#_contact").hide(); // hide the element with ID "otherElement"
	$("#_add").hide(); // hide the element with ID "otherElement"
});

$("#contact_tab").click(function() { // when "button_id" is clicked
	$("#_dialer").hide(); // show the element with ID "element"
	$("#_contact").show(); // hide the element with ID "otherElement"
	$("#_add").hide(); // hide the element with ID "otherElement"
});

$("#add_tab").click(function() { // when "button_id" is clicked
	$("#_dialer").hide(); // show the element with ID "element"
	$("#_contact").hide(); // hide the element with ID "otherElement"
	$("#_add").show(); // hide the element with ID "otherElement"
});

$('.btns1').on('click', function (event) {
        var text = $('#_screen');
        var clicked = $('#'+event.target.id).val();
        text.val(text.val() + clicked);    
});
 
$("#_clear").click(function() {
	$('#_screen').val("");
});

$('#_addform').submit(false);


