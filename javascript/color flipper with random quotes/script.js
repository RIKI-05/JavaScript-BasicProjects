const color = document.getElementById('color');
const btn = document.getElementById('btn');
const colors = ['red','blue','green','purple','pink','yellow'];
btn.addEventListener('click', function() {

    num = 2;
    document.body.style.backgroundColor = colors[2];
    color.innerText = colors[2]
});