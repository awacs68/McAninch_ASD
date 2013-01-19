// Mobile Interfaces and Usability: (MIU)
// Term: 1210
// Project: 4
// Author: Mark McAninch

$("#homepage").on('pageinit', function(){
	//code needed for home page goes here
// hello
});	
		
$("#additem").on('pageinit', function(){

		var myForm = $('#ownerinformationform');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}

    });
});

// New Page Load Data //
$('#loaddata').on('pageinit', function(){

$('#loadjson').on('click', function(){
	    $('.events').remove();
	    $.ajax({
	    	url:'data.json',
	    	type:'GET',
	    	dataType:'json',
	    	success:function(json) {
	    		console.log(json);
	    		for(var i = 0, j = json.data.length; i < j; i++){
	    			var myJson = json.data[i];
	    			$('' +
	    				'<ul class="events">' +
	    				    '<li> fname: ' + myJson.fname + '</li>' +
	    				    '<li> lname: ' + myJson.lname + '</li>' +
	    				    '<li> date: ' + myJson.date + '</li>' +
	    				    '<li> vehicle: ' + myJson.vehicle + '</li>' +
	    				    '<li> year: ' + myJson.year + '</li>' +
	    				    '<li> email: ' + myJson.email + '</li>' +
	    				    '<li> miles: ' + myJson.miles + '</li>' +
	    				    '<li> comments: ' + myJson.comments + '</li>' +
	    				'</ul>'
	    				).appendTo('#eventDisplay');
	    			$.mobile.changePage("#displayItems");
	    		}
              }
	    	});

	    });
	

$('#displayLink').on('click', function(){
	    displayLinks();
});

$("#news").on("pageinit", function(){

});

$("#info").on("pageinit", function(){

});




//The functions below can go inside or outside the pageinit function for the page in which it is needed. 

var autoFillData = function (){
	 		//function autoFillData(){
 // The actual JSON OBJECT data required for this to work is coming from my json.js file,
 // which is loaded from my HTML page.
 // Store the JSON in Local Storage.
         for(var n in json){
         var id = Math.floor(Math.random()*100000);
         localStorage.setItem(id,JSON.stringify(json[n]));        

          }
		};


   

var getData = function(){

};



var storeData = function(key){
 //   getCheckBoxValue();
 // If there is no key, this means this is a brand new item and I need a new key.
 	if(!key){
 	    var id = Math.floor(Math.random()*100000);	
 	}else{
 // Set the id to the existing key I'm editing so that it will save over the data.
 // The key is the same key that's been passed along from the editSubmit event handler
 // to the validate function, and then passed here, into the storeData function.
    id = key;
 	}
        
    var item = {};
        item.fname = ["First Name:", $("#fname").val];
	    item.lname = ["Last Name:", $("#lname").val];
	    item.date = ["Date:", $("#date").val];
        item.vehicle = ["Vehicle:", $("#groups").val];
	    item.year = ["Year:", $("#year").val];
	    item.email = ["Email:", $("#email").val];
        item.miles = ["Miles:", $("#miles").val];
	    item.comments = ["Comments:", $("#comments").val];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Vehicle Saved!");
  };
	
	
 

var	deleteItem = function (){

 
};
	


var clearLocal = function(){
$('#clear').on('click', function(){
	if(localStorage.length == 0){
		alert('There are no vehicles to delete!');
	}else{
	localStorage.clear();
        alert('All vehicles have been deleted!');
	}
});
};

