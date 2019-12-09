// Marked selected todo as completed
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

// Adds new todo to the list
$("input[type='text']").keypress(function(event) {
    console.log("Keypress: " + event.which);

    // If the enter key is pressed
    if(event.which === 13) {
        // Save new todo from input
        let todoTexxt = $(this).val();

        // Clear input value
        $(this).val("");
        
        // Prevents user from adding empty todos
        if(todoTexxt !== "") {
            // Create new li and add to ul
            $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + todoTexxt + "</li>");
       }
    }
})

// Hides/Unhides input field when plus icon is pressed
$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle(500, "linear");
})