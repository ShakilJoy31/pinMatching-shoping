function calculation(inputId, isIncreased, setting, price){
    const change = document.getElementById(inputId); 
    let changed = change.value;
    if(isIncreased == true){
        changed = parseInt(changed) + 1;  
    }
    else if(changed>0){
        changed = parseInt(changed) - 1;  
        }

        change.value = changed;
        const coverPrice = parseInt(document.getElementById(setting).innerText); 
        const totalCoverPrice = changed * price;  
        document.getElementById(setting).innerText = totalCoverPrice; 
        totalCaltulation();
    }
function totalCaltulation(){ 
    const subTotal = document.getElementById('phone-total').innerText; 
    const subTotalCover = document.getElementById('cover-price').innerText; 
    const subTotalInt = parseInt(subTotal); 
    const subTotalCoverInt = parseInt(subTotalCover);
    const subTotalPrice = subTotalInt + subTotalCoverInt; 
    const tax = subTotalPrice * (7.5 / 100); 
    const grandTotal = subTotalPrice + tax; 
    document.getElementById('sub-total').innerText = subTotalPrice;  
    document.getElementById('tax-amount').innerText = tax;  
    document.getElementById('total-price').innerText = grandTotal;  
}





document.getElementById('case-plus').addEventListener('click', function(){
    calculation('case-number',true, 'cover-price', 59); 
    
}); 
document.getElementById('case-minus').addEventListener('click', function(){
    calculation('case-number', false, 'cover-price', 59);  
});  

document.getElementById('phone-plus').addEventListener('click', function(){
    calculation('phone-number', true, 'phone-total', 1219); 
}); 
document.getElementById('phone-minus').addEventListener('click', function(){
    calculation('phone-number', false, 'phone-total', 1219); 
}); 
