abstract class Produto {
    private _valor: number = 0
    private _validade: string = ""
    abstract _funcao: string;
    private _nome: string = ""
    private _conteudo: number = 0



    constructor(nome: string, validade: string) {
        this.nome = nome;
        this.Validade = validade;
    }
    
    public set nome(v : string) {
        this._nome = v;
    }
    
    public get nome() : string {
        return this._nome
    }
    

    public get Valor(): number {
        return this._valor;
    }

    public set Valor(v: number) {
        this._valor = v;
    }


    public get Validade(): string {
        return this.Validade
    }

    public set Validade(v: string) {
        this.Validade = v;
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
    }



    //tem que cadastrar os produtos então não sei se vai precisar de uma classe abstrata pra isso 

}
