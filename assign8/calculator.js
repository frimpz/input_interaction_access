level = 0;
selected_row = 0;

// this gives us the order of the buttons, which we can use to step through the buttons in various directions
// since we know the layout, + 1 moves to the next item, -1 previous, +4 is one row down, -4 is one row up
buttonOrder = ["#button7","#button8","#button9","#buttonDivide","#button4","#button5","#button6","#buttonMultiply","#button1","#button2","#button3","#buttonAdd","#button0","#buttonClear","#buttonEquals","#buttonSubtract"];
rowOrder = ["#row1","#row2","#row3","#row4"];


var myVar = setInterval(setColor, 2000);

function setColor() {
  var x = document.body;
  if (level==0){
  	selectDowny();
  }else if(level==1){
  	selectNext();
	}
};

function stopColor() {
  clearInterval(myVar);
}


function selectRow(name) {
	$(".calculator_row").removeClass("rowsel");
	$(name).addClass("rowsel")
}

function getSelectedItem2() {
	selected = $(".rowsel");
	if (selected.length == 0) {
		return null;
	}
	else {
		return "#" + selected.first().attr('id')
	} 
}

function selectDowny() {
	selected = getSelectedItem2();
	console.log(selected);
	if (selected == null) {
		selectRow(rowOrder[0]);
	} else {
		index = rowOrder.indexOf(selected);
		index = (index + 1) % rowOrder.length;
		selectRow(rowOrder[index]);
		selected_row = index;
	}
}

function selectCol(name) {
	$("button").removeClass("cursor");
	$(name).addClass("cursor")
}

function getSelectedItem() {
	selected = $(".cursor"); 
	if (selected.length == 0) {
		return null;
	}
	else {
		return "#" + selected.first().attr('id')
	} 
}

function selectNext() {
	selected = getSelectedItem();
	if (selected == null) {
		selectCol(buttonOrder[selected_row*4]);
		//selectCol(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index + 1) % 4;
		selectCol(buttonOrder[selected_row*4 + index])
	} 
}


$(document).keydown(function(event) {
	event.preventDefault();
	if(event.keyCode==13){
		press();
	}
});



var enter = 0;
function press() {
  	enter = enter+1;

    setTimeout(function(){
    	if(enter>0){
      		if(enter==1){
      			singlePress();
      		}
      		else{
      			if(level == 1){
      				level =0;
      				selected_row = 0;
					$(getSelectedItem()).removeClass("cursor");
      			}else if(level==0){
      				value = $("#number_input").val();

      				$("#number_input").val(value.slice(0,-1));
      			}
      		}
		}
      enter = 0;
    }, 1000);

}

function singlePress(){
	if(level == 0){
			level = 1;
			$(getSelectedItem2()).removeClass("rowsel");
		}else if(level == 1){
			clickSelectedItem();
			level = 0;
			selected_row = 0;
			$(getSelectedItem()).removeClass("cursor");
		}
}

function selectPrevious() {
	selected = getSelectedItem()
	if (selected == null) {
		selectCol(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index - 1);
		if (index < 0) index = buttonOrder.length + index
		selectCol(buttonOrder[index])
	}	
}

function selectUp() {
	selected = getSelectedItem()
	if (selected == null) {
		selectCol(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index - 4);
		if (index < 0) index = buttonOrder.length + index
		selectCol(buttonOrder[index])
	}
}

function selectDown() {
	selected = getSelectedItem()
	if (selected == null) {
		selectCol(buttonOrder[0]);
	} else {
		index = buttonOrder.indexOf(selected);
		index = (index + 4) % buttonOrder.length;
		selectCol(buttonOrder[index])
	}
}

// actuate the currently selected item
// if no item is selected, this does nothing
// if multiple items are selected, this selects the first
function clickSelectedItem() {
	whichButton = getSelectedItem();
	if (whichButton != null) {
		$(whichButton).click();
	}
}




// calculator stuff below here 
// for operations, we'll save + - 
firstValue = null;
operation = null;
addingNumber = false;

digits = "0123456789"
operators = "+-*/"


// handle calculator functions. all buttons with class calcButton will be handled here
$(".calcButton").click(function(event) {
	buttonLabel = $(this).text();
	
	// if it's a number, add it to our display
	if (digits.indexOf(buttonLabel) != -1) {
		// if we weren't just adding a number, clear our screen
		if (!addingNumber) {
			$("#number_input").val("")
		}
		$("#number_input").val($("#number_input").val() + buttonLabel);
		addingNumber = true;
	// if it's an operator, push the current value onto the stack
	} else if (operators.indexOf(buttonLabel) != -1) {
		// have we added a number? if so, check our stack
		if (addingNumber) {
			// is this the first number on the stack?
			// if so, save it
			if (firstValue == null) {
				firstValue = $("#number_input").val();
				addingNumber = false;
			// do we have a number on the stack already? if so, this is the same as equals
			} else if (firstValue != null) {
				secondValue = $("#number_input").val();
				evaluateExpression(firstValue,operation,secondValue)
				// in this case, keep the operation
				firstValue = $("#number_input").val();
				addingNumber = false;
			}
		}
		// either way, save this as the most recent operation
		operation = buttonLabel;
	} else if (buttonLabel == "C") {
		$("#number_input").val("");
		firstValue = null;
		operation = null;
		addingNumber = false;
	} else if (buttonLabel == "=") {
		if (firstValue != null && operation != null && addingNumber) {
			secondValue = $("#number_input").val();
			evaluateExpression(firstValue,operation,secondValue);
			// clear our state
			firstValue = null;
			operation = null;
			addingNumber = true
		}
	}
})

// do the math for our calculator
function evaluateExpression(first,op,second) {
	output = 0;
	if (op == "+") {
		output = parseInt(first) + parseInt(second);
	} else if (op == "-") {
		output = parseInt(first) - parseInt(second);
	} else if (op == "*") {
		output = parseInt(first) * parseInt(second);
	} else if (op == "/") {
		output = parseInt(first) / parseInt(second);
	}
	
	// now, handle it
	$("#number_input").val(output.toString());
	// deal with state elsewhere
}




