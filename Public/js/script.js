
    
  $(".devour-form").on("submit", function(event) {
  event.preventDefault();

    var tofu_id = $(this).children(".tofu_id").val();
    console.log(tofu_id);
    $.ajax({
      method: "PUT",
      url: "/tofu/" + tofu_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
  $("tofu-create").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTofu = {
      tofu_name: $("#ca").val().trim(),
     
    };

    // Send the POST request.
    $.ajax("/api/tofu", {
      type: "POST",
      data: newTofu
    }).then(
      function() {
        console.log("created new tofu");
        // Reload the page to get the updated list
        location.reload();
      }
  
  )
})








