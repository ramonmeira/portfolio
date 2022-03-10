// Animation on intro section
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

// Includin project in projects section
var projects = [
    {
        name: 'Portfolio - Ramon Meira',
        title: 'Portfolio',
        alt: 'Projeto Portfolio',
        image: 'portfolio-Ramon-Meira.jpg',
        category: 'Website',
        repo: 'https://github.com/ramonmeira/portfolio',
        page: 'https://ramonmeira.github.io/portfolio/',
    },
    {
        name: 'Jogo - Macaco no Deserto',
        title: 'Jogo - Macaco no Deserto',
        alt: 'Jogo - Macaco no Deserto',
        image: 'macaco-no-deserto.jpg',
        category: 'Sistema Web',
        repo: '',
        page: 'http://macaco-no-deserto.herokuapp.com/',
    },
    {
        name: 'Carpintê Decoração',
        title: 'Carpintê Decoração',
        alt: 'Projeto Portfolio',
        image: 'carpintê.jpg',
        category: 'Website',
        repo: 'https://github.com/ramonmeira/carpinte.decoracao',
        page: 'https://carpintedecoracao.droppages.com/home.html',
    },
    {
        name: 'Árvore Genealógica',
        title: 'Árvore Genealógica',
        alt: 'Árvore Genealógica',
        image: 'family-tree.jpg',
        category: 'Sistema Web',
        repo: 'https://github.com/ramonmeira/family-tree',
        page: 'https://ramonmeira.github.io/family-tree/',
    },
    {
        name: 'E-rural Sala de Vídeo',
        title: 'E-rural Sala de Vídeo',
        alt: 'E-rural Sala de Vídeo',
        image: 'e-rural-sala-video.jpg',
        category: 'Sistema Web',
        repo: 'https://github.com/ramonmeira/erural-salas-transmissao',
        page: '',
    },
    {
        name: 'Imersão Dev 2021',
        title: 'Imersão Dev 2021',
        alt: 'Imersão Dev 2021',
        image: 'imersao-dev.jpg',
        category: 'Sistema Web',
        repo: 'https://github.com/ramonmeira/imersao-dev',
        page: 'https://ramonmeira.github.io/imersao-dev/Aula%2010/index.html',
    },
    {
        name: 'Aplicativo - Dice roller',
        title: 'Aplicativo - Dice roller',
        alt: 'Aplicativo - Dice roller',
        image: 'screenshot-Dice-Roller-app.png',
        category: 'App',
        repo: 'https://github.com/ramonmeira/DiceRoller',
        page: '',
    },
];

showProjects(projects);

function showProjects(projects) {
    document.getElementById('portfolioRow').innerHTML = '';
    projects.forEach((project) => {
        var projectColumn =
            "<div class='col-lg-4 col-md-6'>" +
            "    <div class='portfolio-box shadow'>" +
            '        <img' +
            "            src='images/portfolio/" +
            project.image +
            "'" +
            "            alt='" +
            project.alt +
            "'" +
            "            title='" +
            project.title +
            "'" +
            "            class='img-fluid'" +
            '        />' +
            "        <div class='portfolio-info'>" +
            "            <div class='caption'>" +
            '                <h4>' +
            project.name +
            '               </h4>' +
            '                <p>' +
            project.category +
            '                </p>' +
            // '            </div>' +
            // "            <div class='caption'>" +
            '               <div class="portfolio-links">' +
            "                   <a href='" +
            (project.repo == ''
                ? 'javascript:alert("Página indisponível");\'>'
                : project.repo + "' target='_blank'>") +
            "                       <i class='fas fa-file-code portfolio-icon'></i>" +
            '                       <p>Repo</p>' +
            '                   </a>' +
            // '               </div>' +
            // '               <div class="portfolio-links">' +
            "                   <a href='" +
            (project.page == ''
                ? 'javascript:alert("Página indisponível");\'>'
                : project.page + "' target='_blank'>") +
            "                       <i class='fas fa-laptop-code portfolio-icon'></i>" +
            '                       <p>Page</p>' +
            '                   </a>' +
            '               </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        document.getElementById('portfolioRow').innerHTML += projectColumn;
    });
}

function hasCategory(selectedCategory) {
    if (selectedCategory.toLowerCase() == 'all') {
        return projects;
    }
    return projects.filter(function (el) {
        return (
            el.category.toLowerCase().indexOf(selectedCategory.toLowerCase()) >
            -1
        );
    });
}

function filter(element, category) {
    var buttons = document.getElementById(
        'portfolio-buttons-container'
    ).children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    element.classList.add('active');

    showProjects(hasCategory(category));
}
