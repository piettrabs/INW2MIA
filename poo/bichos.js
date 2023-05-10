class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }
    fazerBarulho(){
        console.log("fazendo barulho...")
    }
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

class Gato extends Animal {
    constructor(tipo, raca, cor){
        super(tipo);
        //super referencia à mãe (Animal)
        this.raca = raca;
        this.cor = cor
    }
    miar(){
        console.log("miauuuuuuuuu")
    }
}

class Cachorro extends Animal {
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }
    latir(){
        console.log("auuuuuuuuu")
    }
}

//programa principal
//boolean é o termo na computação para números binários (1 e 0, true and false), por isso não é preciso as aspas.
let bicho1 = new Animal("mamífero", "medio", false, 2020)
let frajola = new Gato("felino", "sphynx", "preto")
let snoop = new Cachorro("canino", "beagle", "malhado")
console.log(bicho1)
console.log(bicho1.porte)
 bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
snoop.latir()
snoop.nascimento = 2021
console.log("A idade é " +snoop.retornarIdade(2023))
frajola.nascimento = 1982
console.log("A idade é " +frajola.retornarIdade(2023))
