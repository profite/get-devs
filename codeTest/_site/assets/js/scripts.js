var addBtn = document.getElementById('clothe').getElementsByTagName('button');
var counter = document.getElementById('counter');
var added = counter.innerHTML

function addToCart() {
  added++;
  counter.innerHTML = added ;
}

for (i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', addToCart);
}
