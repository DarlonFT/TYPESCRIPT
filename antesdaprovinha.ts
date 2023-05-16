class Funcionario {
  private codigo: number;
  private registrosPonto: Date[];

  constructor(codigo: number) {
    this.codigo = codigo;
    this.registrosPonto = [];
  }

  public registrarPonto(): void {
    const horaAtual = new Date();

    this.registrosPonto.push(horaAtual);
    console.log(`Ponto registrado para o funcionário ${this.codigo} às ${horaAtual.toLocaleTimeString()}`);
  }

  public calcularSaldoHorasTrabalhadas(): number {
    let saldoHoras = 0;

    if (this.registrosPonto.length % 2 !== 0) {
      console.log(`O funcionário ${this.codigo} não registrou o ponto de saída.`);
      return saldoHoras;
    }

    for (let i = 0; i < this.registrosPonto.length; i += 2) {
      const horaEntrada = this.registrosPonto[i];
      const horaSaida = this.registrosPonto[i + 1];

      const diffMilissegundos = horaSaida.getTime() - horaEntrada.getTime();
      const diffMinutos = diffMilissegundos / (1000 * 60);
      saldoHoras += diffMinutos / 60;
    }

    return saldoHoras;
  }
}

class Gerente extends Funcionario {
  constructor(codigo: number) {
    super(codigo);
  }

  public registrarPonto(): void {
    console.log('Os gerentes não precisam registrar ponto.');
  }
}

const funcionario1 = new Funcionario(1);
funcionario1.registrarPonto();
funcionario1.registrarPonto();

const gerente1 = new Gerente(2);
gerente1.registrarPonto();

console.log(`Saldo de horas trabalhadas do funcionário 1: ${funcionario1.calcularSaldoHorasTrabalhadas()}`);
Neste exemplo, temos a classe Funcionario que encapsula o código do funcionário e os registros de ponto em um array de datas. O método registrarPonto registra a hora atual no array de registros de ponto.

A classe Gerente é uma classe filha de Funcionario que herda o comportamento de registro de ponto, mas sobrescreve o método registrarPonto para exibir uma mensagem específica para os gerentes.

No exemplo, são criados um objeto Funcionario e um objeto Gerente. Os pontos são registrados para o funcionário, mas o gerente não precisa registrar ponto. Em seguida, é exibido o saldo de horas trabalhadas do funcionário 1 usando o método calcularSaldoHorasTrabalhadas.






