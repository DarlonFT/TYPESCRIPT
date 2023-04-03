class Fornecedor {
  private id: number;
  private nomeRazaoSocial: string;
  private cpfCnpj: string;
  private telefone: string;
  private endereco: string;

  constructor(id: number, nomeRazaoSocial: string, cpfCnpj: string, telefone: string, endereco: string) {
    this.id = id;
    this.nomeRazaoSocial = nomeRazaoSocial;
    this.cpfCnpj = cpfCnpj;
    this.telefone = telefone;
    this.endereco = endereco;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getNomeRazaoSocial(): string {
    return this.nomeRazaoSocial;
  }

  public setNomeRazaoSocial(nomeRazaoSocial: string): void {
    this.nomeRazaoSocial = nomeRazaoSocial;
  }

  public getCpfCnpj(): string {
    return this.cpfCnpj;
  }

  public setCpfCnpj(cpfCnpj: string): void {
    this.cpfCnpj = cpfCnpj;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public setEndereco(endereco: string): void {
    this.endereco = endereco;
  }
}

class Produto {
  private id: number;
  private descricao: string;
  protected fornecedor: Fornecedor;
  private valorUnitario: number;

  constructor(id: number, descricao: string, fornecedor: Fornecedor, valorUnitario: number) {
    this.id = id;
    this.descricao = descricao;
    this.fornecedor = fornecedor;
    this.valorUnitario = valorUnitario;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getFornecedor(): Fornecedor {
    return this.fornecedor;
  }

  public setFornecedor(fornecedor: Fornecedor): void {
    this.fornecedor = fornecedor;
  }

  public getValorUnitario(): number {
    return this.valorUnitario;
  }

  public setValorUnitario(valorUnitario: number): void {
    if (valorUnitario <= 0) {
      throw new Error("O valor unitário deve ser maior do que zero.");
    }
    this.valorUnitario = valorUnitario;
  }
}

class Estoque {
  private id: number;
  private produto: Produto;
  private quantidade: number;

  constructor(id: number, produto: Produto, quantidade: number) {
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public setProduto(produto: Produto): void {
    this.produto = produto;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public setQuantidade(quantidade: number): void {
    if (quantidade < 
