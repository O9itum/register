window.onload = function () {

    //Запрет ввода цифр в поле Name
    let inputName = document.getElementById('Name');
    inputName.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)){
                return false;
        };
    }

    //Запрет ввода '.' и ',' в Username
    let inputUserName = document.getElementById('Username');
    inputUserName.onkeydown = (e) => {
        if ((e.key=='.')||(e.key==',')){
            return false;
        }
    }

    //Согласие для checkbox
    let agree = document.getElementById('agree');
    agree.onclick = () => {
    if (agree.checked) {
        console.log ('Согласен')
    } else {
        console.log('Не согласен');
    }
    }

    let popup = document.getElementById('popup'); 
    let okPopupButton = document.getElementById('popup__button'); 
    let submit = document.getElementById('button');

    submit.addEventListener('click', (e) => {
        if (submit.innerText==='Sign Up'){
        let inputs = document.getElementsByClassName("form-input");
        Array.from(inputs).forEach((element) => {
            if (element.value==''){
            alert (`Заполните поле ${element.id}`);
            return false;
            }
            
        })

        if (inputs[3].value.length < 8) {
            alert ('Пароль должен состоять из не менее 8 символов');
            return false;
        }

        if (inputs[3].value != inputs[4].value) {
            alert ('Пароли должны совпадать');
            return false;
        }

        if (!agree.checked) {
            alert ('Подтвердите согласие с условиями');
            return false;
        }     
        e.preventDefault()  

        popup.classList.add('active');}

        else if (submit.innerText==='Sign In') {
            let name = document.getElementById('Username');
            let pw = document.getElementById('Password');

            if (name.value==='') {alert('Введите логин')} 
            else if (pw.value==='') {
                alert(`${name.value}, введите пароль`)
            }else {alert(`Добро пожаловать, ${name.value}!`)}
        }

        
    });

    function logIn () {
        document.getElementById('form-title').innerText = 'Log in to the system';
        document.getElementById('divName').remove();
        document.getElementById('divEmail').remove();
        document.getElementById('divRepeatPassword').remove();
        document.getElementById('agree-checkbox').remove();
        document.getElementById('refer').remove();
        document.getElementById('button').innerText = 'Sign In';

    }

    let refer = document.getElementById("refer");
    refer.onclick = () => {
        logIn();
    }


    okPopupButton.onclick = () => {
        popup.classList.remove('active');
        let inputs = document.getElementsByClassName("form-input");
        Array.from(inputs).forEach((element) => {
            element.value=''})
        logIn();    
    }
console.log("this file was deleted in my task branch");
console.log("new message");
console.log("Other user message");
}