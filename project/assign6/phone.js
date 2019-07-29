var downX = 0;
var downY = 0;
var tab_downX = 0;
var tab_downY = 0;
var tab_position = 0;
var current_css = 1;


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

$('#_fontChange').click(function (){
	if(current_css == 1){
   		$('link[href="phone.css"]').attr('href','phone-large.css');
   		current_css = 2;
	}else if(current_css == 2){
		$('link[href="phone-large.css"]').attr('href','phone.css');
   		current_css = 1;
	}else if(current_css == 3){
		$('link[href="white-black.css"]').attr('href','white-black-large.css');
   		current_css = 4;
	}else if(current_css == 4){
		$('link[href="white-black-large.css"]').attr('href','white-black.css');
   		current_css = 3;
	}
});


$('#_colorChange').click(function (){
	if(current_css == 1){
   		$('link[href="phone.css"]').attr('href','white-black.css');
   		current_css = 3;
	}else if(current_css == 2){
		$('link[href="phone-large.css"]').attr('href','white-black-large.css');
   		current_css = 4;
	}else if(current_css == 3){
		$('link[href="white-black.css"]').attr('href','phone.css');
   		current_css = 1;
	}else if(current_css == 4){
		$('link[href="white-black-large.css"]').attr('href','phone-large.css');
   		current_css = 2;
	}
});

function switch_tab(position) {
	if (position==tab_position )
		return;
	else
	 switch(position) {
        case 1:
        $("#_dialer").show();
		$("#_contact").hide(); 
		$("#_add").hide(); 
		$("#_about").hide();
		$("#add_tab_div").removeClass("btn_active");
		$("#contact_tab_div").removeClass("btn_active"); 
		$("#about_tab_div").removeClass("btn_active");
        $("#dialer_tab_div").addClass("btn_active");
		tab_position = 1;
        break;
        case 2:
        $("#_dialer").hide();
		$("#_contact").show(); 
		$("#_add").hide(); 
		$("#_about").hide();
		$("#add_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#about_tab_div").removeClass("btn_active");
		$("#contact_tab_div").addClass("btn_active"); 
		tab_position = 2;
        break;
        case 3:
        $("#_dialer").hide();
		$("#_contact").hide();
		$("#_add").show();
		$("#_about").hide(); 
		$("#contact_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#about_tab_div").removeClass("btn_active");
		$("#add_tab_div").addClass("btn_active");
		tab_position = 3;
        break;
        case 4:
        $("#_dialer").hide();
		$("#_contact").hide();
		$("#_add").hide();
		$("#_about").show();
		$("#add_tab_div").removeClass("btn_active");
		$("#dialer_tab_div").removeClass("btn_active"); 
		$("#contact_tab_div").removeClass("btn_active");
		$("#about_tab_div").addClass("btn_active");
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
$("#about_tab").click(function() { 
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

$("#swipe_tabs").mousedown(function(event) {
   tab_downX = event.pageX; 
});
$("#swipe_tabs").mouseup(function(event) {
	
	var tab_upX = event.pageX;

	if (tab_upX < tab_downX)
		switch_tab(tab_position-1);
	else if (tab_upX > tab_downX)
		switch_tab(tab_position+1);
	return;
});
