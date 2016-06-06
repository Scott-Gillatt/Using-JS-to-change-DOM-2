(function() {
  
  document.getElementById("addBtn").addEventListener("click", function(){
  var firstName = document.getElementById("firstName").value;
  var firstNameDiv = document.createElement("DIV");
  firstNameDiv.innerText = firstName;
  // firstName = document.createTextNode(firstName);
  // firstNameDiv.appendChild(firstName);
  
  var lastName = document.getElementById("lastName").value;
  var lastNameDiv = document.createElement("DIV");
  lastNameDiv.innerText = lastName;
  // lastName = document.createTextNode(lastName);
  // lastNameDiv.appendChild(lastName);
  
  var thirdDiv = document.createElement("DIV");
  
  thirdDiv.classList.add("person");
  addChildren(thirdDiv, firstNameDiv, lastNameDiv);
  // thirdDiv.appendChild(lastNameDiv);
  
  var peopleList = document.getElementById('peopleList');
  peopleList.appendChild(thirdDiv);
  
  });
  
  document.getElementById("deleteBtn").addEventListener("click", function(){
    var peopleList = document.getElementById('peopleList');
    if(peopleList.hasChildNodes()){
      peopleList.removeChild(peopleList.lastChild);
    } else {
      console.log("Sorry, no one to remove!");
    }
  });
  
  function addChildren (){
      for (var i = 1; i < arguments.length; i++){
        arguments[0].appendChild(arguments[i]);
      }
    }
  
})();