function formValidate(e){
  var inputValue = e.target.value
  console.log(inputValue);
  var nameSpan = document.getElementById('nameError');
  nameSpan.style.color = 'red'
  
  if(inputValue.length<3){
    nameSpan.innerText = 'invalid name';
    return
  }
   
  if(inputValue.length<3){
    nameSpan.innerText = 'invalid name';
    return
  }

  nameSpan.innerText = '';
  console.log('submitted')


}

function passwordVisibililty(){
  var passInput = document.getElementById('pass')
  if(passInput.type === 'text'){
    passInput.type = 'password'
  return
  }
  passInput.type = 'text'

}