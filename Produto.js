"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(valor, validade, nome, tipo) {
        this._valor = 0;
        this._validade = "";
        this._nome = "";
        this._conteudo = 0;
        this._tipo = "";
        this._disp = false;
        this.Valor = valor;
        this.Validade = validade;
        this.nome = nome;
        this.tipo = tipo;
    }
    set tipo(v) {
        this._tipo = v;
    }
    get tipo() {
        return this._tipo;
    }
    set nome(v) {
        this._nome = v;
    }
    get nome() {
        return this._nome;
    }
    get Valor() {
        return this._valor;
    }
    set Valor(v) {
        this._valor = v;
    }
    get Validade() {
        return this._validade;
    }
    set Validade(v) {
        this._validade = v;
    }
    get Funcao() {
        return this.Funcao;
    }
    set Funcao(v) {
        this.Funcao = v;
    }
    get Conteudo() {
        return this._conteudo;
    }
    set Conteudo(v) {
        this._conteudo = v;
    } //tem que cadastrar os produtos então não sei se vai precisar de uma classe abstrata pra isso 
}
exports.Produto = Produto;
