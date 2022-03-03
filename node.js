class Retangulo{
    constructor(largura, altura){
      this.altura = altura;
      this.largura = largura 
    }
    
    calcularArea(){
      return this.altura * this.largura
    }
}

let retangulo = new Retangulo(10,20)
  retangulo.calcularArea()

let retangulo1 = new Retangulo(20,30)
  retangulo1.calcularArea()

console.log(retangulo.calcularArea())
console.log(retangulo1.calcularArea())