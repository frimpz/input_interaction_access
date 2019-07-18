var downX = 0;
var downY = 0;
var tab_downX = 0;
var tab_downY = 0;
var tab_position = 0;


$(document).ready(function() { // do this when the document is loaded
	switch_tab(1); 
});

$(document).keydown(function(e) {
// charater code for arrow keys 
//37 - left,38 - up,39 - right,40 - down
    switch(e.which) {
        case 37:
        switch_tab(tab_position-1);
        break;
        case 39:
        switch_tab(tab_position+1);
        break;
        default: return; 
    }
    e.preventDefault(); 
});


function switch_tab(position) {
	if (position==tab_position)
		return;
	else
	 switch(position) {
        case 1:
        $("#_dialer").show();
		$("#_contact").hide(); 
		$("#_add").hide(); 
		$("#_gesture").hide();
		$("#add_tab_div").removeClass("btn_active");
		$("#contact_tab_div").removeClass("btn_active"); 
		$("#gesture_tab_div").removeClass("btn_active");
        $("#dialer_tab_div").addClass("btn_active");
		tab_position = 1;
        break;
        case 2:
        $("#_dialer").hide();
		$("#_contact").show(); 
		$("#_add").hide(); 
		$("#_gesture").hide();
		$("#add_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#gesture_tab_div").removeClass("btn_active");
		$("#contact_tab_div").addClass("btn_active"); 
		tab_position = 2;
        break;
        case 3:
        $("#_dialer").hide();
		$("#_contact").hide();
		$("#_add").show();
		$("#_gesture").hide(); 
		$("#contact_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#gesture_tab_div").removeClass("btn_active");
		$("#add_tab_div").addClass("btn_active");
		tab_position = 3;
        break;
        case 4:
        $("#_dialer").hide();
		$("#_contact").hide();
		$("#_add").hide();
		$("#_gesture").show();
		$("#add_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#contact_tab_div").removeClass("btn_active");
		$("#gesture_tab_div").addClass("btn_active");
		tab_position = 4;
        break;
        default: return; 
    }
}         

$("#dialer_tab").click(function() { 
	switch_tab(1); 
});

$("#contact_tab").click(function() {
	switch_tab(2);
});

$("#add_tab").click(function() { 
	switch_tab(3); 
});
$("#gesture_tab").click(function() { 
	 switch_tab(4) ;
});
$('.no_btns').on('click', function (event) {
        var text = $('#_screen');
        var clicked = $('#'+event.target.id).val();
        text.val(text.val() + clicked);    
});
 
$("#_clear").click(function() {
	$('#_screen').val("");
});
$("#_dial").click(function() {
	alert('Dial button clicked');
});
$("#_addContact").click(function() {
	alert('Okay! contact will be added');
	clear_newContact();
});
$("#_clearContact").click(function() {
	clear_newContact();
});
function clear_newContact() {
	$('#name').val("");
	$('#phone_no').val("");
	$('#email').val("");
}

$('#_addform').submit(false);


$("#_gesturearea").mouseup(function(event) {
	
	var upX = event.pageX;
	var upY = event.pageY;

	if (upX < downX){
		if (upY < downY){
			$('#gesture_output').val("swipe:  up and left ");
		}
		else if(upY > downY){
			$('#gesture_output').val("swipe: down and left");
		}
		else $('#gesture_output').val("swipe: left only");
	}
	else if (upX > downX){
		if (upY < downY){
			$('#gesture_output').val("swipe:  up and right ");
		}
		else if(upY > downY){
			$('#gesture_output').val("swipe: down and right");
		}
		else $('#gesture_output').val("swipe: right only");
	}
	else {
		if (upY < downY){
			$('#gesture_output').val("swipe:  up only");
		}
		else if(upY > downY){
			$('#gesture_output').val("swipe: down only");
		}
		else $('#gesture_output').val("mouseup");
	}

});

$("#_gesturearea").mousedown(function(event) {
   downX = event.pageX; 
   downY = event.pageY;
   $('#gesture_output').val("mousedown");
});

$("#tabs_id").mousedown(function(event) {
   tab_downX = event.pageX; 
});
$("#tabs_id").mouseup(function(event) {
	
	var tab_upX = event.pageX;

	if (tab_upX < tab_downX)
		switch_tab(tab_position-1);
	else if (tab_upX > tab_downX)
		switch_tab(tab_position+1);
	return;
});
