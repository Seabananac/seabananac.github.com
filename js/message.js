addEvent(window,'load',function(){
    var oName = document.querySelector('#c_name');
    var oEmail = document.querySelector('#c_email');
    var oMessage = document.querySelector('#c_message');
    var oButton = document.querySelector('#c_button');
    oButton.onclick = function(){
        if(oName.value == '' || oEmail.value == '' || oMessage.value == ''){
            alert('Fail in send');
            return;
        }else{
            alert('Send success');
            return;
            oName.value = '';
            oEmail.value = '';
            oMessage.value = '';
        }
    }
});