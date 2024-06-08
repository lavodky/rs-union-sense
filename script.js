let form = document.querySelector('.container form');
let loader = document.querySelector(".loader");
let button = document.querySelector("button");

form.addEventListener("submit", e => {
  e.preventDefault();

  loader.classList.remove('hidden');
  button.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      loader.classList.add('hidden');
      button.innerText = "Enviado ✅";
      setTimeout(() => {
        window.location.href = '/success.html';
      }, 2000);
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert("Oops!");
        }
      })
    }
  }).catch(error => {
    loader.classList.add('hidden');
    button.disabled = false;
    alert("Oops!");
  });
});
