class OrdemCombustivel {
  id: number;
  veiculo: string;
  motorista: string;
  litros: number;
  data: Date;

  constructor(id: number, veiculo: string, motorista: string, litros: number, data: Date) {
    this.id = id;
    this.veiculo = veiculo;
    this.motorista = motorista;
    this.litros = litros;
    this.data = data;
  }
}
class OrdemCombustivelController {
  ordens: OrdemCombustivel[];

  constructor() {
    this.ordens = [];
  }

  emitirOrdem(veiculo: string, motorista: string, litros: number) {
    const data = new Date();
    const id = this.ordens.length + 1;
    const ordem = new OrdemCombustivel(id, veiculo, motorista, litros, data);
    this.ordens.push(ordem);
    console.log(`Ordem de combustível emitida para ${veiculo} com ${litros} litros em ${data}`);
  }

  listarOrdens() {
    console.log(`Lista de ordens de combustível:`);
    this.ordens.forEach((ordem) => {
      console.log(`${ordem.id} - ${ordem.veiculo} - ${ordem.motorista} - ${ordem.litros} litros - ${ordem.data}`);
    });
  }
}
