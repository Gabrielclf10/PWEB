function Retangulo(base, altura) {
  this.base = base
  this.altura = altura
  
  function CalcArea(base, altura) {
    return base * altura
  }
  this.area = CalcArea(base, altura)
}

var base = parseInt(prompt("Digite a base do retangulo: " ));
var altura = parseInt(prompt("Digite a altura do retangulo: " ));
var obj = new Retangulo(base, altura)
alert("Area do retangulo: "+obj.area)
 


function Conta() {
  var nomeCorrentista;
  var banco;
  var numeroConta;
  var saldo;
    
  this.getNomeCorrentista = function () {
    return nomeCorrentista;
  }
  
  this.getBanco = function () {
    return banco;
  }

  this.getNumeroConta = function () {
    return numeroConta;
  }

  this.getSaldo = function () {
    return saldo;
  }
  
  this.setNomeCorrentista = function (value) {
    nomeCorrentista = value;
  }

  this.setBanco = function (value) {
    banco = value;
  }

  this.setNumeroConta = function (value) {
    numeroConta = value;
  }

  this.setSaldo = function (value) {
    saldo = value;
  }
}

function Corrente () {
  var saldoEspecial;

  this.getSaldoEspecial = function () {
    return saldoEspecial;
  }

  this.setSaldoEspecial = function (value) {
    saldoEspecial = value;
  }
}
  
function Poupanca () {
  var juros;
  var dataVenc;

  this.getJuros = function () {
    return juros;
  }

  this.getDataVenc = function () {
    return dataVenc;
  }

  this.setJuros = function (value) {
    juros = value;
  }

  this.setDataVenc = function (value) {
    dataVenc = value;
  }
}
  
Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();
contaCorrente = new Corrente();
contaPoupanca = new Poupanca();

contaCorrente.setNomeCorrentista('Gabriel')
contaCorrente.setBanco('C6')
contaCorrente.setNumeroConta(123)
contaCorrente.setSaldo(1000)
contaCorrente.setSaldoEspecial(100)

alert(contaCorrente.getNomeCorrentista()+'\n'+
      contaCorrente.getBanco()+'\n'+
      contaCorrente.getNumeroConta()+'\n'+
      contaCorrente.getSaldo()+'\n'+
      contaCorrente.getSaldoEspecial()+'\n'
)

contaPoupanca.setNomeCorrentista('Gabriel')
contaPoupanca.setBanco('Nubank')
contaPoupanca.setNumeroConta(456)
contaPoupanca.setSaldo(1000)
contaPoupanca.setJuros(10)
contaPoupanca.setDataVenc('31/12/2024')

alert(contaPoupanca.getNomeCorrentista()+'\n'+
      contaPoupanca.getBanco()+'\n'+
      contaPoupanca.getNumeroConta()+'\n'+
      contaPoupanca.getSaldo()+'\n'+
      contaPoupanca.getJuros()+'\n'+
      contaPoupanca.getDataVenc() +'\n'
)
  
  
  
  