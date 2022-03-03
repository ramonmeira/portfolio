consoleText(
  ['Web', 'Kotlin'],
  [
    '<span class="icon fas fa-code"></span>',
    '<span class="icon fab fa-android"></span>',
  ],
  'iam'
);

///*https://codepen.io/Tbgse/pen/dYaJyJ*/
function consoleText(words, symbols, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var letterCount = 1;
  var x = 1;
  var waiting = false;

  var target = document.getElementById(id);
  var con = document.getElementById('console');

  target.setAttribute('style', 'color:' + colors[0]);

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML =
        'Eu sou um Desenvolvedor ' + words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        var usedSymbol = symbols.shift();
        symbols.push(usedSymbol);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 2000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      target.innerHTML += ' ' + symbols[0];
      window.setTimeout(
        function () {
          x = -1;
          letterCount += x;
          waiting = false;
        },
        words[0] == 'last' ? 2000 : 2000
      );
    } else if (waiting === false) {
      target.innerHTML =
        'Eu sou um Desenvolvedor ' + words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'display-2--description console-underscore hidden';
      visible = false;
    } else {
      con.className = 'display-2--description console-underscore';
      visible = true;
    }
  }, 400);
}
