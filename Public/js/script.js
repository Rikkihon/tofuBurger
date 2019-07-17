$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var tofu_id = $(this).children(".tofu_id").val();
    console.log("script line 7, what is the tofu id " + tofu_id);
    
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
 
    $(".btn-primary").on("click", function(event) {
      var newTofu = {
        tofu_name: $(".btn-primary").attr('id').trim()
        //val is just on inputs, attribute gets the attribute value of any attribute except for more current jquery, which uses props
        //store data
      }; //debugger;
   
      var newTofu2 = {
        tofu_name: $(".btn-primary").data('sql-id')
      }

      console.log("the newTofu is "+ newTofu.tofu_name);

     console.log("the newTofu is "+ newTofu2.tofu_name);
     console.log("it's reading inside this function!");
 
   // Send the DELETE request.
  $.ajax("/tofu/" + newTofu2.tofu_name, {
    method: "DELETE",
    url: "/api/todos/" + newTofu.tofu_name
  }).then(
    function() {
      console.log("deleted tasty food", tofu_name, tofu_id, id);
      // Reload the page to get the updated list
      location.reload();
    }
  )
    })
  