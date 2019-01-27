let wrap = document.querySelector('.wrap');

wrap.addEventListener('click', function (e) {
  if (e.target.className === 'tagging-title') {
    e.target.makeDraggable();
    if (e.target.nextElementSibling.className === 'delete hide') {
      e.target.nextElementSibling.className = 'delete';
      e.target.nextElementSibling.addEventListener('click', function () {
        e.target.parentNode.className = 'hide'
      })
    } else {
      e.target.nextElementSibling.className = 'delete hide'
    }
  }
});

Element.prototype.makeDraggable = function () {
  let element1 = document.getElementById('element1');
  let element2 = document.getElementById('element2');
  let element3 = document.getElementById('element3');
  let o = this.parentNode;
  console.log(o);
  o.onmousedown = function (e) {
    let offsetX = e.pageX - parseInt(o.style.left);
    let offsetY = e.pageY - parseInt(o.style.top);
    document.onmousemove = function (e) {
      o.style.left = Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';
      o.style.top = Math.max(Math.min(e.pageY - offsetY, o.parentNode.clientHeight - o.clientHeight), 0) + 'px';

      if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) > 315 && e.path[1].id === 'element3') {
        element3.classList.add("flex-revers");
      }else if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) < 315 && e.path[1].id === 'element3') {
        element3.classList.remove("flex-revers");
      }
      if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) > 369 && e.path[1].id === 'element1') {
        element1.classList.add("flex-revers");
      }else if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) < 369 && e.path[1].id === 'element1'){
        element1.classList.remove("flex-revers");
      }
      if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) > 410 && e.path[1].id === 'element2') {
        element2.classList.add("flex-revers");
      }else if (Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) < 410 && e.path[1].id === 'element2'){
        element2.classList.remove("flex-revers");
      }
    };
    document.onmouseup = function (e) {
      document.onmousemove = o.onmouseup = null
    }
  };
  o.ondragstart = function () {
    return 0
  }
};
