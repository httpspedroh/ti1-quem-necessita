let divInst = document.getElementById('inst_info'),
    divMap = document.getElementById('inst_map');

// ----------------------------------------------------------------------------------------------------------------------------------- //

onload = () => {
    localStorage.setItem("instituicoes", JSON.stringify(db_fakeInstituicoes.usuarios));
    instituicoes = JSON.parse(localStorage.getItem("instituicoes"));

    loadInstInfo();
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInstInfo() {

    let text = '',
        instInfo = instituicoes[sessionStorage.getItem("id_clickInst")];

    text += `
    <div class="col-12 col-xl-3 align-self-center text-center">
        <img src="${instInfo.logo}" alt="${instInfo.nome}" width="250" height="250">
        <br><span class="infoInst_contato"><i class="fas fa-phone-alt"></i>${instInfo.telefone}</span>
    </div>
    <div class="infoInst_general col-12 col-xl-9 align-self-center">
        <span class="infoInst_nome">${instInfo.nome}</span>
        <br><span class="infoInst_categoria">${instInfo.categoria}</span>
        <p>${instInfo.descricao}</p>`;

    if(getUserLogged() == sessionStorage.getItem("id_clickInst"))
    {
        text += `<button class="infoInst_editar btn"><a href="#"><i class="fas fa-cogs"></i>Editar informações</a></button>
        <button class="infoInst_editar btn"><a href="#"><i class="far fa-newspaper"></i>Nova notícia</a></button>`;
    }

    text += `</div>`;

    divInst.innerHTML = text;
    divMap.innerHTML = `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&amp;q=${instInfo.endereco}" allowfullscreen=""></iframe>`;
}

function clearInstInfo() {
    divInst.innerHTML = '';
}

function reloadInstInfo() {
    clearInstInfo();
    loadInstInfo();
}