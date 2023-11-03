       /*VARIABILI DI TESTO*/
       let variabiliTesto = {
        brandname: "equilibrio",
        dropname: "nome drop",
        pivaname: "dario torrisi",
        piva: "P.IVA: 05915450877"
      };

      for (let chiave in variabiliTesto) {
        let elementi = document.querySelectorAll('.' + chiave);
        elementi.forEach(function(el) {
          el.textContent = variabiliTesto[chiave];
        });
      }

/*ANIMAZIONI DELLE CARD*/
const sr = ScrollReveal({
    distance: '40px',
    duration: 800,
    delay: 0,
    viewFactor: 0.1,
});

sr.reveal(`.home__data, .home__img, 
           .accessory__content,
           .inin`, {
    origin: 'top',
    interval: 80,
});

sr.reveal(`.home__data, .home__img, 
           .decoration img`, {
    origin: 'top',
    interval: 20,
});

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
});

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
});

/*VALORI FORM*/
document.querySelector("#inputOrderCode").addEventListener("input", function() {
    const codeInput = this.value.toLowerCase();
    const errorParagraph = document.getElementById("orderCodeError");
    if (codeInput.includes("qbrl") && codeInput.includes("dt") && codeInput.includes("drop")) {
      errorParagraph.textContent = "";
      this.setCustomValidity("");
  } else {
      errorParagraph.textContent = "Codice Ordine non Valido";
      this.setCustomValidity("Il codice non è valido");
  }
  });