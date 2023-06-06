"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor() {
        this.geral = [];
        this.banheiro = [];
        this.cozinha = [];
        this.lavanderia = [];
        this.especificos = [];
        this.todos = [];
    }
    adicionar(produto) {
        this.todos.push(produto);
        if (produto.tipo == "geral") {
            this.geral.push(produto);
        }
        else if (produto.tipo == "banheiro") {
            this.banheiro.push(produto);
        }
        else if (produto.tipo == "cozinha") {
            this.cozinha.push(produto);
        }
        else if (produto.tipo == "lavanderia") {
            this.lavanderia.push(produto);
        }
        else if (produto.tipo == "especificos") {
            this.especificos.push(produto);
        }
        else {
            console.log("não é possivel cadastrar este produto pois seu tipo é inválido");
        }
    }
}
exports.Estoque = Estoque;
