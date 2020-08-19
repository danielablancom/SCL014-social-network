/* eslint-disable max-len */
export const detailsRcp = () => {
  // Traer desde el path de la url el id de la receta
  // luego buscar en la db esa receta

  const divRegister = document.createElement('div');
  const viewRegister = `
  <div class="contendor">
    <header>
      <div class="container-logo">
        <a href="#/feed"><img class="logo-header" src="./img/iconos/LOGO.jpg"></a>
      </div>
      <div class="container-icon">
        <a href="#/post"><i class="fas fa-plus icon-feed"></i></a>
        <i class="fas fa-search icon-feed"></i>
        <i class="fas fa-user icon-feed"></i>
        <i class="fas fa-filter icon-feed"></i>
      </div>
    </header>
      <div class= "container4">
        <div class= "container-title">
         <h6>PIZZA CON PEPPERONI🍕</h6>
        </div>
        <div class="containerDetail-icon">
        <i class="fas fa-ellipsis-v icon-detail"></i>
        </div>
      </div>
      <div class= "img-recipePost">
        <img src="./img/Img-recetas/recalentarpizza-int.jpg" alt="" id="detail-RecipeImg">
      </div>
      <div class="container-icon2">
      <i class="far fa-heart icon-like"></i> <i class="fas fa-share-square icon-share"></i> 
    </div>
    <div class="pastilla">
      <i class="fas fa-utensils icon-fork"> 4 Personas</i><i class="fas fa-clock icon-clock"> 15 minutos</i>
    </div>
    
    <div class="contenedor">
      <div>
        <h7><strong>Ingredientes:</strong></h7>
      </div>
      <div class="check">        
        <input type="checkbox" class="check" value="">500g de harina de trigo.
        <br>
        <input type="checkbox" class="check" value="">media taza de agua tibia.
        <br>
        <input type="checkbox" class="check" value="">4 cucharaditas de aceite.
        <br>
        <input type="checkbox" class="check" value="">7g de levadura.
        <br>
        <input type="checkbox" class="check" value="">Sal c/n.
        <br>
        <div>
        <p class="text-ingredient">Para la Salsa<p/>
        </div>
        <input type="checkbox" class="check" value="">1 lata de tomate triturado.
        <br>
        <input type="checkbox" class="check" value="">Orégano y Albahaca seco.
        <br>
        <div>
        <p class="text-ingredient">Para Cubrir<p/>
        </div>
        <input type="checkbox" class="check" value="">250g de mozzarella rallada.
        
      </div>
    </div>
    <div class="contenedor">
      <div>
        <h7><strong>Paso a paso:</strong></h7>
      </div>
      <div>
       <p>Elaboración de la masa</p>
        <ol>
          <li>Coloca la harina de trigo en un recipiente</li>
          <li>Esparce la levadura en uno de los bordes y la sal en otro sin que se toquen.</li>
          <li>Echa el aceite de oliva y el agua tibia.</li>
          <li>Mezcla con tus manos y amasa durante varios minutos hasta obtener una masa suave.</li>
          <li>Haz un bollo y deja reposar hasta que duplique su volumen.</li>
          <li>Tira el líquido y pasa el tomate en el recipiente. Agrega las especias al gusto y mezcla.</li>
          <li>Espolvorea la masa de pizza con un poco de queso y echa por encima la salsa en forma de hilo.</li>
        </ol>
      </div>
    </div>`;
  divRegister.innerHTML = viewRegister;
  return divRegister;
};
