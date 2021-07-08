function newResult(){
  document.getElementById('resultDisplay').innerHTML = Math.floor(Math.random()*100) + 1 + '%';
  var fname = document.getElementById('fName').value;
  var sname = document.getElementById('sName').value;

  var html = fname +'&nbsp'+ 'and' +'&nbsp'+ sname +'&nbsp'+ 'is compatible:';

  document.getElementById('resultNames').innerHTML = html;
}
