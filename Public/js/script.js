$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var tofu_id = $(this).children(".tofu_id").val();
    
    $.ajax({
      method: "PUT",
      url: "/tofu/" + tofu_id
    }).then(function(data) {
      // reload page to see devoured in proper column
      location.reload();
    });

  });
});

  $(".devour-form").on("submit", function(event) {
  //was on submit, but I changed it
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTofu = {
      tofu_name: $("#ca").val().trim()
    };
    console.log(newTofu)

    //Send the POST request.
    $.ajax("/api/tofu/create", {
      type: "POST",
      data: newTofu
    }).then(
      function() {
        console.log("created new tofu");
        // Reload the page to get the updated list
        location.reload();
      }
  
  )



$("#delete-button").on("click", function(event) {
  var id = $(this).data("id");

console.log("Can I see this?"+ id );

  // Send the DELETE request.

  $.ajax("/api/tofu/" + id, {
    type: "DELETE",
    data: id
  }).then(
    function() {
      console.log("deleted tasty food", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
 });
});
