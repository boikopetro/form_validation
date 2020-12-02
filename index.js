let element = document.getElementById('phone');
let maskOption = {
    mask: "+38(000)000-00-00",
    lazy: false
}
let mask = new IMask(element, maskOption);

document.getElementById('btn').addEventListener('click', checkValidation);

function checkValidation(){
    const clientPhone = document.getElementById('phone').value;
    const regex = /^\+38\(0\d{2}\)\d{3}\-\d{2}\-\d{2}/;
    const validation = regex.test(clientPhone);
    if(clientPhone==="+38(___)___-__-__"){
        alert('enter your phone number')
    } else if (validation) {
        alert('ok')
    } else {
        alert(clientPhone+" is not correct  :( ")
    }
}


