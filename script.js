document.getElementById('color-filter').addEventListener('change', function() {
  const filterClass = this.value; /*váriavel constante*/
  const body = document.body;

  // Remove todas as classes existentes do body, exceto as classes padrão do body
  body.className = body.className.replace(/\bfilter-\S+/g, ''); // Remove classes de filtro anteriores

  // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
  if (filterClass !== 'default') {
      // Adiciona a classe selecionada ao body
      body.classList.add('filter-' + filterClass);
  }
});


document.getElementById('increase-font').addEventListener('click', function() {
    changeFontSize(2); // aumenta a fonte em 2 pixels
});

document.getElementById('decrease-font').addEventListener('click', function() {
    changeFontSize(-2); // diminui a fonte em 2 pixels
});

function changeFontSize(delta) {
    var body = document.getElementsByTagName('body')[0];
    var currentFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var newFontSize = (parseFloat(currentFontSize) + delta) + 'px';
    body.style.fontSize = newFontSize;
}
function validarForm() {
    var form = document.getElementById("myForm");
    var radios = form.querySelectorAll('input[type="radio"]');
    var todasRespondidas = true;
    
    radios.forEach(function(radio) {
      var question = radio.closest('.question');
      var checked = question.querySelector('input[type="radio"]:checked');
      if (!checked) {
        todasRespondidas = false;
        question.classList.add('error');
      } else {
        question.classList.remove('error');
      }
    });
    
    if (todasRespondidas) {
      form.submit();
    } else {
      alert("Por favor, responda todas as perguntas.");
    }
  }

// Seleciona o botão de alternar tema
const themeToggle = document.getElementById('theme-toggle');

// Adiciona um ouvinte de evento ao botão
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo do documento
    document.body.classList.toggle('dark-mode');
});