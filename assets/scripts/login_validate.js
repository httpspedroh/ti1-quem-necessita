var loginButton = document.getElementById('login_btn'),
    userInput = document.getElementById('login_user'),
    passInput = document.getElementById('login_pass');

loginButton.addEventListener('click', checkLogin);

// ------------------------------------------------------------------------------------------------------------------ //

function checkLogin()
{
    if(!userInput.value.length || !passInput.value.length)
    {
        bootbox.alert({
            closeButton: false,
            message: `Os campos não podem estar vazios!`,
            size: 'small',
            buttons: {
                ok: {
                    label: 'Fechar',
                    className: 'lightGreen'
                },
            },
        });

        return event.preventDefault();
    }

    let i_id = instituicoes.findIndex(x => x.user === userInput.value);

    if(i_id == -1)
    {
        bootbox.alert({
            closeButton: false,
            message: `O usuário "${userInput.value}" não existe!`,
            size: 'small',
            buttons: {
                ok: {
                    label: 'Fechar',
                    className: 'lightGreen'
                },
            },
        });
    }
    else
    {
        let inst = instituicoes[i_id];

        if(passInput.value === inst.senha)
        {
            location.href = '/';
            sessionStorage.setItem('userLogged', i_id);
        }
        else
        {
            bootbox.alert({
                closeButton: false,
                message: `A senha inserida está incorreta.`,
                size: 'small',
                buttons: {
                    ok: {
                        label: 'Fechar',
                        className: 'lightGreen'
                    },
                },
            });
        }
    }

    event.preventDefault();
}