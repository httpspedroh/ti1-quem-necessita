let divCarrossel = document.getElementById('inst_carrossel');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setClickInst(id) {

    sessionStorage.setItem('id_clickInst', id);
    location.href = "instituicao.html";
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function addInst(dados) {

    instituicoes.push(dados);
    localStorage.setItem("usuarios", JSON.stringify(instituicoes));

    reloadInst();
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function clearInst() { divCarrossel.innerHTML = ''; }

// ----------------------------------------------------------------------------------------------------------------------------------- //

function reloadInst() {
    clearInst();
    loadInsts();
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInsts() {

    let texto = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < instituicoes.length; i++) {

        let instInfo = instituicoes[i];

        if(i == 0) texto += `<div class="carousel-item active">`;
        else texto += `<div class="carousel-item">`;

        texto +=
            `<span class="inst_info">
                <img src="${instInfo.logo}" alt="${instInfo.nome}" width="200" height="200">
                <h5>${instInfo.nome}</h5>
                <h6>
                    <b>Contato:</b> ${instInfo.telefone}<br>
                    <b>Endereço:</b> ${instInfo.endereco}<br>
                    <b>Categoria:</b> ${instInfo.categoria}
                </h6>
                <button type="button" class="btn inst_saibaMais" onclick="setClickInst(${i})"><i class="fas fa-plus"></i>Saiba mais</button>
            </span>
        </div>`;
    };

    // Preencher a DIV com o texto HTML
    divCarrossel.innerHTML = texto;
}