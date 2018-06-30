$(document).ready(function)(){
	//call makeGrid function on submit
	$('#sizePicker').submit(function makeGrid(event){
		//prevent continuos submit of the form
		event.preventDefault();
		//clear the grid
		$('table tr').remove();

		var rows=$('#inputHeight').val();

		var columns=$('#inputWeight').val();
		//loop through rows and columns to create the grid
			for(var i=0;i<=rows;i++){
				$('table').append('<tr></tr>');
				}//nested loop
				for(var j=0; j<=columns;j++){
					$('tr').append('<td></td>');

				}
			//}//remove if you do not want to nes the loop
			//create class paint
			$('td').attr('class','paint');
				//
			$('.paint').on('click',function(){
					// choose color
				var highlight=$('#colorPicker').val();
				$('#colorPicker').target.css('background-color',highlight);

			});
	});
}