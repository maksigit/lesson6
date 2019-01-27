let arrowL = document.querySelector('.arrow-l');
let arrowR = document.querySelector('.arrow-r');
let allItems = document.querySelectorAll('.item');

arrowL.addEventListener('click', function () {
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].dataset.num === '1' && allItems[i].className === 'item block') {
      allItems[i].className = 'item';
      i = allItems.length;
      allItems[i - 1].className = 'item block';
    } else if (allItems[i].className === 'item block') {
      allItems[i].className = 'item';
      allItems[i - 1].className = 'item block';
      break
    }
  }
});

arrowR.addEventListener('click', function () {
  let limit = (allItems.length + '');
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].dataset.num === limit && allItems[i].className === 'item block') {
      allItems[i].className = 'item';
      i = 0;
      allItems[i].className = 'item block';
    } else if (allItems[i].className === 'item block') {
      allItems[i].className = 'item';
      allItems[i + 1].className = 'item block';
      break
    }
  }
});

