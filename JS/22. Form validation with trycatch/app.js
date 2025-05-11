function submitHandle(e){
    e.preventDefault();
    try {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let fNameInput = document.querySelector('#firstname');
        let lNameInput = document.querySelector('#lastname');
        let state = document.querySelector('#states');
        let radioBtns = document.getElementsByName('gender');
        let emailInput = document.querySelector('#email');

        if(fNameInput.value.length<3 ){
            throw 'please input firstname!'
        }
        if(lNameInput.value.length<3){
            throw 'please input lastname!'
        }
        if(state.selectedIndex === 0){
            throw 'please select a state!'
        }
        if(!radioBtns[0].checked && !radioBtns[1].checked){
            throw 'select a radio button'
        }
        if(!emailInput.value.match(regex)){
            throw 'invaild email!'
        }



        console.log('submitted')
    
} catch (error) {
    console.error(error)
}

}







// API


// middleware