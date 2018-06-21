//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
  
}

function increasedRankBy(){
   const list = document.querySelectorAll('ul.rank-list li')
  for (let i = 0; i < lis.length; i++){
  lis[i].innerHTML = (i + 1).toString()
}
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}