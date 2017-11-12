// Check off Specific Todos By Clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete a toDo
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
	$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		// grabbing new to do text from input
		var toDoText = $(this).val();
		$(this).val("");
		// create new li and add to list
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " +toDoText+ "</li>");
	}
});

$(".fa-plus-square-o").on("click", function(){
	$("input[type='text']").fadeToggle();

});





// //if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
		
	// }//else
	// else {
	// 	//turn it gray
	// 	$(this).css({
	// color: "gray",
	// textDecoration: "line-through"
	// });

	// }
