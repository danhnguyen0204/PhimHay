function login(event){
    event.preventDefault();

    let username = document.getElementById('username').value.trim();
    let password = document .getElementById('password').value.trim();
    let regMessage = document.getElementById('regMessage');


    let storedUser = localStorage.getItem('users') ? JSON.parse (localStorage.getItem('users')) : {};
    if(storedUser && storedUser.password === password){
        window.location.href='welcome.html';
    } else {
        loginMessage.innerText = 'Invalid username or password';
        loginMessage.style.color='red';
    }
}

