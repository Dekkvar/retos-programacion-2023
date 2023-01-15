function tennis(gameArray) {
  let resultadoP1 = "Love";
  let resultadoP2 = "Love";

  //Actualizamos el resultado por cada elemento del Array y imprimimos el resultado general.
  for(let i = 0; i < gameArray.length; i++) {
    let newresult = tennisGame(gameArray[i], resultadoP1, resultadoP2);

    //Actualiza el resultado de cada jugador.
    if (newresult === "Deuce") {
      resultadoP1 = 40;
      resultadoP2 = 40;
    } else if (gameArray[i] === "P1") {
      resultadoP1 = newresult;
    } else {
      resultadoP2 = newresult;
    }

    //Imprime el resultado general.
    if (resultadoP1 === "Ventaja" || resultadoP1 === "Ha ganado") {
      console.log(resultadoP1 + " P1");
    } else if (resultadoP2 === "Ventaja" || resultadoP2 === "Ha ganado") {
      console.log(resultadoP2 + " P2");
    } else if (resultadoP1 === 40 && resultadoP2 === 40) {
      console.log("Deuce");
    } else {
      console.log(resultadoP1 + " - " + resultadoP2);
    }
  }
}

//Devuelve el resultado de cada partida en función de quién haya ganado.
function tennisGame(winner, resultadoP1, resultadoP2) {
  let actWinner;
  
  if (winner === "P1") {
    let actResP1 = result(resultadoP1, resultadoP2);
    actWinner = actResP1;
  } else {
    let actResP2 = result(resultadoP2, resultadoP1);
    actWinner = actResP2;
  }

  return actWinner;
}

//Comprueba el resultado de cada partida.
function result(winner, looser) {
  switch (winner) {
    case "Love":
      return 15;
    case 15:
      return 30;
    case 30:
      return 40;
    case 40:
      if (looser === 40) {
        return "Ventaja";
      } else if (looser === "Ventaja") {
        return "Deuce";
      } else {
        return "Ha ganado";
      }
    case "Ventaja":
      return "Ha ganado";
  }
}

tennis(["P2", "P2", "P1", "P1", "P2", "P1", "P2", "P1", "P1", "P1"]);