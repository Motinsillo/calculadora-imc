const formularioIMC = document.querySelector("#miFormulario");

formularioIMC.addEventListener("submit",(event)=>{
    event.preventDefault();
     
    let peso = document.getElementById("inputpeso").value
    let altura = document.getElementById("inputaltura").value
    let  imc = peso / Math.pow((altura/100),2);
          
    
    const resultadoIMC = document.getElementById("resultado")
    

    resultadoIMC.style.display = "flex"

    if (imc < 18.5) {
      resultadoIMC.innerHTML = `
          <p>Tu IMC es: ${imc}. Bajo peso.</p>
      `;
  } else if (imc >= 18.5 && imc <= 24.9) {
      resultadoIMC.innerHTML = `
          <p>Tu IMC es: ${imc}. Peso normal.</p>
      `;
  } else if (imc >= 25.0 && imc <= 29.9) {
      resultadoIMC.innerHTML = `
          <p>Tu IMC es: ${imc}. Sobrepeso.</p>
      `;
  } else if (imc >= 30.0) {
      resultadoIMC.innerHTML = `
          <p>Tu IMC es: ${imc}. Obesidad. Por favor baja de peso.</p>
      `;
  }


    
});