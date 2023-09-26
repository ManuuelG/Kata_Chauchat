let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
function chauchat(cargador) {
    for (let i = 0; i < cargador.length; i++) {
      const probabilidadPillada = Math.random(); 
      if (probabilidadPillada <= 0.8) {
        console.log(cargador[i]);
      } else {
        console.log("Killo, me he quedao pillá!");
        break; 
      }
    }
  }

  if ((i + 1) % 3 === 0) {
    console.log(" ");
  }

  chauchat(cargador);