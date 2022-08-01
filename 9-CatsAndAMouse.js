// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catA = x
    let catB = y
    let mouse = z

    if (Math.abs(mouse - catA) < Math.abs(mouse - catB)) {
        return 'Cat A';
    } else if (Math.abs(mouse - catA) > Math.abs(mouse - catB)) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}

  // console.log(catAndMouse(1, 2, 3)) //Esperado: Cat B
  // console.log(catAndMouse(1, 3, 2)) //Esperado: Mouse C
  // console.log(catAndMouse(2, 1, 3)) //Esperado: Cat A
  // console.log(catAndMouse(2, 3, 1)) //Esperado: Cat A
  // console.log(catAndMouse(3, 2, 1)) //Esperado: Cat B


