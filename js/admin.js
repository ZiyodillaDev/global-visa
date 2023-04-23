let rec = JSON.parse(localStorage.getItem("user"));
let elRecord = document.querySelector(".js-record");
let elTabel = document.querySelector("table");
function renderPokemon(arr, node) {
  for (i of arr) {
    console.log(i.lastName);
    node.innerHTML += `
      <tr>
      <td>${i.name}</td>
      <td>${i.lastName}</td>
      <td>${i.Phone}</td>
      <td>${i.Text}</td>
      
      </tr>
      `;
  }
}

renderPokemon(rec, elTabel);
