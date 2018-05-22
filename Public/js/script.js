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

//   $(".devour-form").on("click", function(event) {
//   //was on submit, but I changed it
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newTofu = {
//       tofu_name: $("#ca").val().trim()
     
//     };

//     // Send the POST request.
//     $.ajax("/api/tofu", {
//       type: "POST",
//       data: newTofu
//     }).then(
//       function() {
//         console.log("created new tofu");
//         // Reload the page to get the updated list
//         location.reload();
//       }
  
//   )
// })


$(".delete-tofu").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/tofu/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted tasty food", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});








