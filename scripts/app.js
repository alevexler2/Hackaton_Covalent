const inputUser = document.querySelector("#inputUser");
const btnUser = document.querySelector("#btnUser");
const container = document.querySelector("#container");
btnUser.addEventListener("click", (e) => {
  e.preventDefault();
  let address = inputUser.value;
  let url = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?key=ckey_8129ee43a92e4bec8574fc26e05`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        data.data.items.forEach((e) => {
          console.log(e);
          container.innerHTML = `<div class="card" style="width: 18rem;">
          <img src="${e.logo_url}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Address: ${address}</h5>
            <p class="card-text">Balance: ${e.contract_name} </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Quote: ${e.quote}</li>
            <li class="list-group-item">Quote: ${e.quote_rate}</li>
          </ul>
          </div>`;
        });
      } else {
        alert(data.error_message);
      }
    })
    .catch((e) => {
      console.error(e);
    });
});
