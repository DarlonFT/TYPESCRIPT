export class Produto {
    private _valor: number = 0
    private _validade: string = ""
    private _funcao: string;
    private _nome: string = ""
    private _conteudo: number = 0
    private _tipo: string = ""
    public _disp: boolean = false;


    constructor(valor: number, validade: string, nome: string, tipo: string) {
        this.Valor = valor;
        this.Validade = validade;
        this.nome = nome;
        this.tipo = tipo;

    }

 
    public set tipo(v: string) {
        this._tipo = v;
    }

    public get tipo(): string {
        return this._tipo;
    }


    public set nome(v: string) {
        this._nome = v;
    }

    public get nome(): string {
        return this._nome
    }


    public get Valor(): number {
        return this._valor;
    }

    public set Valor(v: number) {
        this._valor = v;
    }


    public get Validade(): string {
        return this._validade
    }

    public set Validade(v: string) {
        this._validade = v;
    }


    public get Funcao(): string {
        return this.Funcao
    }

    public set Funcao(v: string) {
        this.Funcao = v;
    }


    public get Conteudo(): number {
        return this._conteudo
    }

    public set Conteudo(v: number) {
        this._conteudo = v;
    }  //tem que cadastrar os produtos então não sei se vai precisar de uma classe abstrata pra isso 

}


