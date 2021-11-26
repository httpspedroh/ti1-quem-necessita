var divCarInd = document.getElementById('car_indicator'),
    divCarImgs = document.getElementById('car_imgs');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadImgs() {

    let divButtonsControl = document.getElementById('btns_control');

    if(getUserLogged() == -1) divButtonsControl.style.display = 'none';
    else divButtonsControl.innerHTML = `<div id="btns_control" class="camp_controle container-fluid">
         <div class="row">
             <span class="col-6 text-right"><button class="btn btn_campAdd"><i class="fas fa-plus"></i>Adicionar imagem</button></span>
             <span class="col-6 text-left"><button class="btn btn_campExcluir"><i class="fas fa-trash"></i>Excluir imagem</button></span>
         </div>
     </div>`;

    // --------------- //

    let textoInd = '',
        textoImg = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < imgs.length; i++) {

        let imgInfo = imgs[i];

        if(i == 0) 
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active"></li>`;
            textoImg += `<div class="carousel-item active">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
                        </div>`;
        }
        else
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`;
            textoImg += `<div class="carousel-item">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
                        </div>`;
        }

        divCarInd.innerHTML = textoInd;
        divCarImgs.innerHTML = textoImg;
    };
}

function clearImgs() {
    divCarInd.innerHTML = '';
    divCarImgs.innerHTML = '';
}

function reloadImgs() {
    clearImgs();
    carregarImgs();
}