

  function validateForm(formElement) {

    //Check user name is at least 2 characters long
    if (formElement.fname.value.length < 3)
      return focusElement(formElement.user_name,
       'Please enter a name that is at least 3 characters long.');
   if (formElement.lname.value.length < 3)
      return focusElement(formElement.user_name,  
'Please enter a name that is at least 3 characters long.');
    //Check password is at least 5 characters long
    cmp_pass();
    if (formElement.pass.value.length < 5)
      return focusElement(formElement.pass,
       'Please enter a password that is at least 5 characters long.');
    //Check for valid e-mail address
    if (validEmail(formElement.email.value) == false)
      return focusElement(formElement.email,
       'Please enter a valid e-mail address.');
    
   


    //If all is OK, return true and let the form submit
    return true;
  }
function cmp_pass(){
  if(document.getElementById('pass1').value != document.getElementById('pass2').value){
    document.getElementById('pass2').style.background = "#FA8258";
    document.getElementById('pass2').style.border = "0px solid";
	alert("incorrect Passwords");
  }
}
  /*End of form validation.*/

  /*Below are various functions that can be
   re-used in your own validation scripts:*/
  function focusElement(element, errorMessage) {
    //Tell the user an error has been made
    alert((errorMessage.length > 0) ? errorMessage :
      'You did not enter valid data; Please try again');
    //Select the text in the input box, and focus it (if possible)
    if (element.select) element.select();
    if (element.focus) element.focus();
  
    return false;
  }
  function countSelected(formElement, inputType, inputName) {
    //If there is no input type, make it checkbox
    if (inputType == null) inputType = 'checkbox';
    var returnValue = 0;
    //Loop for all elements in this form
    for (var loopCounter = 0; loopCounter < formElement.length; loopCounter++) {
      //If this element is the wanted type
      var element = formElement.elements[loopCounter];
      if (element.type == inputType && element.checked == true) {
        //If we have the correct control name, increment the count
        if (inputName.length > 0)
          if (element.name == inputName)
            returnValue++;
        else
          returnValue++
      }
    }
    //Return the count
    return returnValue;
  }
  function countSelectedOptions(selectElement) {
    var returnValue = 0;
    //Loop for all options
    for (var loopCounter = 0; loopCounter < selectElement.options.length; loopCounter++)
      if (selectElement.options[loopCounter].selected == true)
        returnValue++;
    return returnValue;
  }
  function validEmail(email) {
    var emailRE =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailRE.test(email.value);
  }
  /*End of functions.*/

