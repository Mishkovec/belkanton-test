let form = document.getElementById('form-container');
let btn = document.getElementById('btn');
btn.onclick = function(event) {
    event.preventDefault();
    form.innerHTML=`<h3>Спасибо за заявку</h3> <p style="font-size:0.8em;"> В течение часа с вами свяжется наш специалист</p>`
}