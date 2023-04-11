# TYPESCRIPT
class Roupa {
  constructor(
    private _tipo: string,
    private _tamanho: string,
    private _marca: string,
    private _preco: number
  ) {}

  // getters e setters
  get tipo(): string {
    return this._tipo;
  }
  set tipo(novoTipo: string) {
    if (novoTipo.length < 3) {
      throw new Error('O tipo da roupa deve ter pelo menos 3 caracteres.');
    }
    this._tipo = novoTipo;
  }

  get tamanho(): string {
    return this._tamanho;
  }
  set tamanho(novoTamanho: string) {
    if (novoTamanho.length < 2) {
      throw new Error('O tamanho da roupa deve ter pelo menos 2 caracteres.');
    }
    this._tamanho = novoTamanho;
  }

  get marca(): string {
    return this._marca;
  }
  set marca(novaMarca: string) {
    if (novaMarca.length < 3) {
      throw new Error('A marca da roupa deve ter pelo menos 3 caracteres.');
    }
    this._marca = novaMarca;
  }

  get preco(): number {
    return this._preco;
  }
  set preco(novoPreco: number) {
    if (novoPreco <= 0) {
      throw new Error('O preço da roupa deve ser maior que zero.');
    }
    this._preco = novoPreco;
  }
}

// Classe filha 1
class Camiseta extends Roupa {
  constructor(
    tipo: string,
    tamanho: string,
    marca: string,
    preco: number,
    private _cor: string
  ) {
    super(tipo, tamanho, marca, preco);
  }

  // getter e setter específico
  get cor(): string {
    return this._cor;
  }
  set cor(novaCor: string) {
    if (novaCor.length < 3) {
      throw new Error('A cor da camiseta deve ter pelo menos 3 caracteres.');
    }
    this._cor = novaCor;
  }
}

// Classe filha 2
class Calca extends Roupa {
  constructor(
    tipo: string,
    tamanho: string,
    marca: string,
    preco: number,
    private _modelo: string
  ) {
    super(tipo, tamanho, marca, preco);
  }

  // getter e setter específico
  get modelo(): string {
    return this._modelo;
  }
  set modelo(novoModelo: string) {
    if (novoModelo.length < 4) {
      throw new Error('O modelo da calça deve ter pelo menos 4 caracteres.');
    }
    this._modelo = novoModelo;
  }
}

