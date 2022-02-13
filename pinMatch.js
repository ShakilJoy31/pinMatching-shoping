function generatPin(){
    const makeInt = Math.round(Math.random() * 100000); 
    const makeString = makeInt + ''; 
    if(makeString.length == 5){
        document.getElementById('display-pin').value = makeInt; 
        return makeInt; 
    }
    else{
        generatPin(); 
    }

}

document.getElementById('key-pad').addEventListener('click', function (event){
    const pressedNumber = event.target.innerText; 
    
    if(isNaN(pressedNumber)){
        if(pressedNumber == 'C'){
            document.getElementById('dislay-number').value = ''; 
        }
    }
    else{
        const previousNumber = document.getElementById('dislay-number').value; 
    const updated = previousNumber + pressedNumber; 
    document.getElementById('dislay-number').value = updated; 
    }
}); 


document.getElementById('verifyPin').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin').value; 
    const disPlayPinInt = parseInt(displayPin);

    const displayNumber = document.getElementById('dislay-number').value; 
    const disPlayNumberInt = parseInt(displayNumber); 
    if(disPlayPinInt == disPlayNumberInt){
        document.getElementById('notify-success').style.display = 'block'; 
        document.getElementById('notify-fail').style.display = 'none'; 
        document.getElementById('another-button').style.display = 'block'; 
        }
        else{
            document.getElementById('notify-success').style.display = 'none'; 
        document.getElementById('notify-fail').style.display = 'block'; 
        document.getElementById('another-button').style.display = 'none'; 
        }
        document.getElementById('dislay-number').value = ''; 
}); 

document.getElementById('another-button').addEventListener('click', function(){
    window.location.href='index.html'; 
    console.log('go to button is clicked'); 
}); 

