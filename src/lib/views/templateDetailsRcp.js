export const detailsRcp = () => {
  const divDetails = document.createElement('div');
  const viewDetails = `
    <header>
      <div class="container-logo">
        <i class="fas fa-chevron-left flecha"></i>
        <img class="logo-header" src="./img/iconos/LOGO.jpg">
      </div>
      <div class="container-icon">
        <a href="#/post"><i class="fas fa-plus icon-feed"></i></a>
        <i class="fas fa-search icon-feed"></i>
        <i class="fas fa-user icon-feed"></i>
        <i class="fas fa-filter icon-feed"></i>
      </div>
    </header>
    
    <div>
        <img src="" alt="">
    </div>
    <div>
        <i class="far fa-heart icon-like"></i><i class="fas fa-share-square icon-share"></i>
    </div>
    <div class="pastilla">
        <i class="fas fa-utensils icon-fork"> 4 Personas</i><i class="fas fa-clock icon-clock"> 15 minutos</i>
    </div>

    <div class="contenedor">
        <div>
            <h7><strong>Ingredientes:</strong></h7>
        </div>
    <div>
      <input type="checkbox" class="check" value="">1 rama de brócoli de unos 600 g.
      <br>
      <input type="checkbox" class="check" value="">3 cucharadas de aceite de oliva.
      <br>
      <input type="checkbox" class="check" value="">100 gr de jamón (puedes usar fiambre de pollo o
      pavo).
      <br>
      <input type="checkbox" class="check" value="">100 g de queso rallado grueso.
      <br>
      <input type="checkbox" class="check" value="">1 tazón de salsa bechamel clarita.
      <br>
      <input type="checkbox" class="check" value="">Sal, pimienta, ajo en polvo y nuez moscada.
    </div>
  </div>

  <div class="contenedor">
    <div>
      <h7><strong>Paso a paso:</strong></h7>
    </div>
    <div>
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
    `;
  divDetails.innerHTML = viewDetails;
  return viewDetails;
};
