var modal = $('#myAlert');
$("#savebtn").click(function() {
	x  = create($('#name').val()); 
	
});



$("#_close").click(function() { 
	$(modal).hide();
});
$(window).click(function(event) {
	 if (event.target.id == modal.attr('id')) {
	 	$(modal).hide();
	}
});

function create(x) {
	document.getElementById('images_grid').innerHTML = "";
	var row = 0;
	var col = 0;
	var img_div = 0 ;
	var currentRow = "";
	var currentCol = "";
	var currentImg = "";
	x= x.trim();
	x = x.replace(/ +(?= )/g,'');
	x = x.toLowerCase();
	subs = x.split(" ");
	for ( var i = 0; i < subs.length; i++ ){
		if(i%3==0){
			row = row+1;
			currentRow = "_row"+row;
			var rowDiv = document.createElement('div');
			rowDiv.id = currentRow;
			rowDiv.className = 'images_row';
			document.getElementById('images_grid').appendChild(rowDiv);
		}

		col = col+1;
		currentCol = "_col"+"_"+col;
		var colDiv = document.createElement('div');
		colDiv.id = currentCol;
		colDiv.className = 'images_col';
		document.getElementById(currentRow).appendChild(colDiv);

		var cal_width = 100/subs[i].length;

		for ( var j = 0; j < subs[i].length; j++ ){
			img_div = img_div+1;
			currentImg = "_img"+"_"+img_div;
			var imgDiv = document.createElement('div');
			imgDiv.id = currentImg;
			imgDiv.className = '_image';
			imgDiv.style.maxWidth = '20%';
			imgDiv.style.width = cal_width + '%';
			document.getElementById(currentCol).appendChild(imgDiv);

			var img_item = document.createElement('img');
			img_item.className = 'img';
			img_item.src = "xters/"+subs[i][j]+".jpg";
			document.getElementById(currentImg).appendChild(img_item);

		}

	}
	
	return subs;
}
