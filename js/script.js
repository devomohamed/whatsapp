let button = document.querySelector('button')
let phoneNumber = document.querySelector('#phone-number')
let message = document.querySelector('#message')


phoneNumber.addEventListener('keyup',function (event){
  let numberNoSpace = removeSpace(phoneNumber.value)
  let number = removeSpicialCharacters(numberNoSpace)
  phoneNumber.value = number
})


button.addEventListener('click',function (event){
  event.preventDefault();
  if(validPhoneNumber(phoneNumber.value)){
    let url;
    if(message?.value){
      url = `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`;
    }else{
      url = `https://wa.me/${phoneNumber.value}`;
    }
    console.log(url);
    
    window.open(url, '_blank');

  }else{
    alert("Please enter a valid phone number")
  }
})

function removeSpace(text){
  return text.replace(/\s+/g, '')
}

function validPhoneNumber(phoneNumber){
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  // Test the phone number against the regex
  return phoneRegex.test(phoneNumber);
}

function removeSpicialCharacters(phoneNumber){
  return phoneNumber.replace(/[^a-zA-Z0-9+]/g, '')
}