$(document).ready(function() {
// SUBMIT FORM
      $('form').on('submit', function(event) {
		// Prevent the form from submitting via the browser.
    console.log("firing function");
		event.preventDefault();
		ajaxPost();
	});


    function ajaxPost(){

    	// PREPARE FORM DATA
    	var formData = {
    		name : $("#name").val(),
    		age :  $("#age").val()
    	}

    	// DO POST
      console.log("within function")
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url :  "/home",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(customer) {
        console.log(JSON.stringify(customer));
        location.reload();
      },
			error : function(e){
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});

    	// Reset FormData after Posting
    	resetData();

    }

    function resetData(){
      console.log("resetting");
    	$("#name").val("");
    	$("#age").val("");
    }



    ///get

    $('#lngthofname').on('click', function(event) {
  // Prevent the form from submitting via the browser.

  event.preventDefault();
  ajaxget();
});


  function ajaxget(){

    $.ajax({
    type : "GET",
    contentType : "application/json",
    url :  "/home/length",
    //data : JSON.stringify(formData),
    dataType : 'json',
    success : function(customer) {

      location.reload();
    },
    error : function(e){
      alert("Error!")
      console.log("ERROR: ", e);
    }
  });



  }
})
