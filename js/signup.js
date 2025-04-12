function register(event){
    event.preventDefault();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let fullname = document.getElementById('fullname').value.trim();
    let regMessage = document.getElementById('regMessage');


    let lowerCaseLeter = /[a-z]/g;
    let upperCaseLeter = /[A-z]/g;
    let numbers = /[0-9]/g;

    if (!username || !password || !fullname ){
        regMessage.innerText="Please fill in all fields";
        return;
    }

    if(password.lengh < 8){
        regMessage.innertext='Paseword must be at least 8 charaters'
    }

    if(!lowerCaseLeter.test(password)){
        regMessage.innerText='Paseword must contain a lowercase letter.';
        return;
    }

    if(!upperCaseLeter.test(password)){
        regMessage.innerText='Paseword must contain a lowercase letter.';
        return;
    }
     
    if(!numbers.test(password)){
        regMessage.innerText='Paseword must contain a number.';
        return;
    }
    
    let user ={
        username: username,
        password: password,
        fullname: fullname,  
    };

    let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')) : {};

    if (users[username]){
        regMessage.innerText ='Username already exists!';
    } else {
        users[username] = user;
        localStorage.setItem('users', JSON.stringify(users));
        regMessage.innerText = 'Registration successfull!';
        //regMessage.style.color='green';
    }
}