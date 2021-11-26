function loadLogin()
{
    if(getUserLogged() == null) setUserLogged(-1);
    
    let divLoginText = document.getElementById('textLogin');

    if(getUserLogged() == -1) divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Login</a>`;
    else divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Sair</a>`;

    let blogin = document.getElementById('b_loginOrLogoff');

    blogin.addEventListener('click', loginOrLogoff);
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loginOrLogoff()
{
    if(getUserLogged() == -1) console.log('rodou');
    else
    {
        event.preventDefault();

        setUserLogged(-1);

        location.reload();
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function getUserLogged() { return sessionStorage.getItem("userLogged"); }
function setUserLogged(userid) { return sessionStorage.setItem("userLogged", userid); }