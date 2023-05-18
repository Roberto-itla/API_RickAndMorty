const buttonPrevious = document.getElementById("btn-previous");
const buttonNext = document.getElementById("btn-next");

const apiRick = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
 
  divRes = document.querySelector(".container");
  divRes.innerHTML = ""

  data.results.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = `
    <article id="character">
    <div class="card" style="width:14rem;text-align:center;">
      <img src=${item.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.location.name}</p>
        <p class="card-text">${item.status}</p>
        <p class="card-text">${item.gender}</p>
      </div>        
  </article>`;
    divRes.appendChild(divItem);
  });

};

apiRick();

