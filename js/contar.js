function animateNumberCounter(element) {
    let target = parseInt(element.getAttribute("data-target"));
    let current = 0;
    let step = Math.ceil(80 / 100); // Ajuste o valor para controlar a velocidade da animação

    // Função de atualização do número
    function updateNumber() {
      if (current < target) {
        current += step;
        element.textContent = current;
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = target; // Certifica-se de que o número final seja exato
      }
    }

    updateNumber();
  }

  // Chama a animação quando o documento estiver pronto
  document.addEventListener("DOMContentLoaded", function() {
    let numberElements = document.querySelectorAll(".h4-clientes");
    numberElements.forEach(function(element) {
      animateNumberCounter(element);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let numberElements = document.querySelectorAll(".h4-obras");
    numberElements.forEach(function(element) {
      animateNumberCounter(element);
    });
  });
