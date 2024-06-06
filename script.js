let form = document.querySelector('.container form');
let loader = document.querySelector(".loader");
let button = document.querySelector("button");

form.addEventListener("submit", e => {
  e.preventDefault();

  loader.classList.remove('hidden');

  fetch(form.action, {
    method: "POST",
    body: new FormData(document.querySelector(".container form")),
  }).then(
    response => response.json()
  ).then((html) => {

    loader.classList.add('hidden');
    button.innerText = "Sent ✅"
    
    setInterval(() => {
      location.reload();
    }, 2000);
    // alert('Form Submitted Succesfully!')
  });
});