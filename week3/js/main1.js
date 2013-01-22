// Mobile Interfaces and Usability: (MIU)
// Term: 1210
// Project: 4
// Author: Mark McAninch

 window.addEventListener("DOMContentLoaded", function(){
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

 function makeCats(){
	  var formTag = document.getElementsByTagName("form"),
	  selectLi = $("select"),
	  makeSelect = document.createElement("select");
	  makeSelect.setAttribute("id", "groups");
	for(var i=0, j=addVehicle.length; i<j; i++){
		var makeOption = document.createElement("option");
		var optText = addVehicle[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	}
	selectLi.appendChild(makeSelect);
 }

  var toggleControls = function (n){
		switch(n){
		    case "on":
			$("informationForm").style.display = "none";
			$("clear").style.display = "inline";
			$("displayLink").style.display = "none";
			$("addNew").style.display = "inline";
			break;
		case "off":
			$("informationForm").style.display = "block";
			$("clear").style.display = "inline";
			$("displayLink").style.display = "inline";
			$("addNew").style.display = "none";
			$("items").style.display = "none";   
			break;
		default:
			return false; 
				
		}
	}
 
    function storeData(key){
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
        item.fname = ["First Name:", $("fname").value];
	    item.lname = ["Last Name:", $("lname").value];
	    item.date = ["Date:", $("date").value];
        item.vehicle = ["Vehicle:", $("groups").value];
	    item.year = ["Year:", $("year").value];
	    item.email = ["Email:", $("email").value];
        item.miles = ["Miles:", $("miles").value];
	    item.comments = ["Comments:", $("comments").value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Vehicle Saved!");
  }
  
 function getData(){
	toggleControls("on");
	if(localStorage.length === 0){
           alert("There is no data in Local Storage so default data was added.");
           autoFillData();
	}
	var makeDiv = document.createElement("div");
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	$("items").style.display = "block"
	for(var i=0, len=localStorage.length; i<len;i++){
		var makeli = document.createElement("li");
		var linksLi = document.createElement("li")
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement("ul");
		makeli.appendChild(makeSubList);
		getImage(obj.vehicle[1], makeSubList);
		for(var n in obj){
			var makeSubli = document.createElement("li");
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
			makeSubList.appendChild(linksLi);
		}
		makeItemLinks(localStorage.key(i), linksLi);
		
 // Get the image for the right category.
       function getImage(catName, makeSubList){
            var imageLi = document.createElement('li');
            makeSubList.appendChild(imageLi);
            var newImg = document.createElement('img');
            var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
            imageLi.appendChild(newImg);   
        }		
		
		
		function autoFillData(){
 // The actual JSON OBJECT data required for this to work is coming from my json.js file,
 // which is loaded from my HTML page.
 // Store the JSON in Local Storage.
         for(var n in json){
         var id = Math.floor(Math.random()*100000);
         localStorage.setItem(id, JSON.stringify(json[n]));        

          }
		}
      }
		
    }
 // Make Item Links
 function makeItemLinks(key, linksLi){
 // Add edit single item link.
 	var editLink = document.createElement('a');
    editLink.href = "#";
 	editLink.key = key;
 	var editText = "Edit Vehicle";
 	editLink.addEventListener("click", editItem);
 	editLink.innerHTML = editText;
 	linksLi.appendChild(editLink);

 // Add line break.
    var breakTag = document.createElement('br');
    linksLi.appendChild(breakTag);


 // Add delete single item link.
 	var deleteLink = document.createElement('a');
 	deleteLink.href = "#";
 	deleteLink.key = key;
 	var deleteText = "Delete Vehicle";
 	deleteLink.addEventListener("click", deleteItem);
 	deleteLink.innerHTML = deleteText;
 	linksLi.appendChild(deleteLink);
 }

    function editItem(){
 // Grab the item data from local storage.
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

 // Show the form.
        toggleControls("off");

 // Populate the form fields with current localStorage values.
    
        $("fname").value = item.fname[1];
        $("lname").value = item.lname[1];
        $("date").value = item.date[1];
        $("year").value = item.year[1];
        $("email").value = item.email[1];
        $("miles").value = item.miles[1];
        $("comments").value = item.comments[1];

 // Remove the inital listener from the input "save Vehicle" button.
        save.removeEventListener('click', storeData);
 // Change submit button value to edit button.
        $('submit').value = "Edit Vehicle";
        var editSubmit = $('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;

    }

    function deleteItem(){
    	var ask = confirm("Are you sure you want to delete this vehicle?");
    	if(ask){
    		localStorage.removeItem(this.key);
    		alert("Vehicle was deleted!!");
    		window.location.reload();
        }else{
        	alert("Vehicle was NOT deleted.")
    	}
    }

 

    function clearLocal(){
    	if(localStorage.length === 0){
    		alert("There is no data to clear.")
    	}else{
    		localStorage.clear();
    		alert("All vehicle's are deleted!");
    		window.location.reload();
    		return false;
    	  } 
    }
    	
    function validate(e){
 // Define the elements we want to check.
        var getGroup = $('groups');
        var getFname = $('fname');
        var getLname = $('lname');
        var getEmail = $('email');
        var getYear = $('year');
        var getMiles = $('miles');
 
 // Reset error messages.
    errMsg.innerHTML = "";
    getGroup.style.border = "1px solid black";
    getFname.style.border = "1px solid black";
    getLname.style.border = "1px solid black";
    getEmail.style.border = "1px solid black";
    getYear.style.border = "1px solid black";
    getMiles.style.border = "1px solid black";


 // Get error messages.
        var messageAry = [];
 // Group validation.
        if(getGroup.value === "--Choose A Make--"){
        	var groupError = "Please choose a make.";
        	getGroup.style.border = "1px solid red";
        	messageAry.push(groupError);

        }
    
 // First name validation.
        if(getFname.value === ""){
            var fNameError = "Please enter a first name."
            getFname.style.border = "1px solid red";
            messageAry.push(fNameError);

        }

 // Last name validation.
        if(getLname.value === ""){
            var lNameError = "Please enter a last name."
            getLname.style.border = "1px solid red";
            messageAry.push(lNameError);

        }

 // Email Validation.
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(re.exec(getEmail.value))){
        	var emailError = "Please enter a valid email address.";
        	getEmail.style.border = "1px solid red";
        	messageAry.push(emailError);

        }

 // If there were errors, display them on the screen.
        if(messageAry.length >= 1){
        	for(var i=0, j=messageAry.length; i < j; i++){
        		var txt = document.createElement('li');
        		txt.innerHTML = messageAry[i];
        		errMsg.appendChild(txt);
        	}
            e.preventDefault();
            return false;
        }else{
 // If all is good, save my data! Send the key value (which came from the editData function.)
 // Remember this key value was passed through the editSubmit event listener as a property.
            storeData(this.key);     

        }
    } 

        
 // Variable defaults.
        var addVehicle = ["--Choose A Make--", "GM", "Ford", "Chrysler", "Hyundai"];
        makeCats();
        errMsg = $('errors');
        selectLi = $('groups');
 // Set link & sudmit click events.
        var displayLink = $("displayLink");
        displayLink.addEventListener("click", getData);
        var clearLink = $("clear");   
        clearLink.addEventListener("click", clearLocal);
        var save = $("submit");
        save.addEventListener("click", validate); 
 });