// Classe base para veículos
class Veiculo {
  protected velocidade: number;

  constructor(velocidade: number) {
    this.velocidade = velocidade;
  }
//verificação
  public verificarVelocidade(): void {
    if (this.velocidade > 100) {
      const Excesso = ((this.velocidade - 100) / 100) * 100;
      if (Excesso <= 5) {
        console.log("Velocidade acima do limite, porém dentro da tolerância.");
      } else {
        console.log("Velocidade acima do limite. Infração registrada!");
        this.notificarInfracao();
      }
    } else {
      console.log("Velocidade dentro do limite.");
    }
  }

  protected notificarInfracao(): void {
    console.log("Notificação enviada para o motorista.");
  }
}

class Carro extends Veiculo {
  constructor(velocidade: number) {
    super(velocidade);
  }

  protected notificarInfracao(): void {
    console.log("Infração de velocidade registrada ");
    console.log("Multa enviada para o motorista.");
  }
}

class Caminhao extends Veiculo {
  constructor(velocidade: number) {
    super(velocidade);
  }

  protected notificarInfracao(): void {
    console.log("Infração de velocidade registrada ");
    console.log("Multa enviada para o motorista.");
  }
}

class Moto extends Veiculo {
  constructor(velocidade: number) {
    super(velocidade);
  }

  protected notificarInfracao(): void {
    console.log("Infração de velocidade registrada ");
    console.log("Multa enviada para o motorista.");
  }
}

// funcionamento. 
const carro = new Carro(110);
const caminhao = new Caminhao(95);
const moto = new Moto(105);

carro.verificarVelocidade();
caminhao.verificarVelocidade();
moto.verificarVelocidade();
