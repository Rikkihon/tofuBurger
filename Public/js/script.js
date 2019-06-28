$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var tofu_id = $(this).children(".tofu_id").val();
    console.log("script line 7, what is the tofu id" + tofu_id);
    
    $.ajax({
      method: "PUT",
      url: "/tofu/" + tofu_id
    }).then(function(data) {
      console.log("this is the data variable" + data)
      console.log("this is the Url it used" + url)
      // reload page to see devoured in proper column
      location.reload();
    });

  });
});

  $(".devour-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTofu = {
      tofu_name: $("#ca").val().trim()
    };
    //console.log(newTofu)

    //Send the POST request.
    $.ajax("/api/tofu/create", {
      type: "POST",
      data: newTofu
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      })
    })
/* $(".button-primary").on("click", function(event) {
 // var id = $(this).data("id");
  console.log("it's reading inside this function!")
  console.log("Can I see this?"+ tofu_id );

  // Send the DELETE request.
$.ajax("/tofu/:", {
  type: "DELETE"
}).then(
  function() {
    console.log("deleted tasty food", id);
    // Reload the page to get the updated list
    location.reload();
  }
);
}); */

function myFunction(id){
  console.log("You clicked here")
 
  $.ajax("/tofu/:", {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted tasty food", id);
      // Reload the page to get the updated list
      location.reload();
    }
  )
}
 