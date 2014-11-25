
var shoppingApp = {

	// Validates user input
	validate: function() {
	

		var item = $('#item').val();
		if ($.trim(item) === "") {
			alert("Please enter an item");
		} else {
            return item;
		}
    },

    // Adds item to shopping list
	addItem: function() {
		
		var item = $("#item").val();
		var checkbox = ('<input type="checkbox">');
		var del = ('<a href="#" id="delete">Delete</a>');
		if(shoppingApp.validate()) {
			$(".uncomplete ul").append('<li>'+checkbox + "  " + item + "  " +del+'</li>');
			$("#item").val("");
		}
		return false;
	},

	//the add button
	submitItem: function(){
		
		$('#button').click(shoppingApp.addItem());

	},
	
	//delete item from the list
	deleteItem: function(event) {
		
		event.preventDefault();
		$(this).parent().remove();
	},

	// switching between both divs
	switching: function(event){
		
		event.preventDefault();
		if($(this).is(':checked')) {
			$(this).parent().appendTo('.complete ul');
		} else {
			$(this).parent().appendTo('.uncomplete ul');
		}
	},


	initialise: function() {
		$('#button').click(shoppingApp.addItem);
		$(".main ul").on("change", 'input[type=checkbox]', shoppingApp.switching);
		$(".main ul").on("click", "a", shoppingApp.deleteItem);
	},
	
}

$(document).ready(shoppingApp.initialise);