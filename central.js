"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
const Estoque_1 = require("./Estoque");
class Loja {
    constructor() {
        this.prateleira = [];
    }
    abastecer(p) {
        p._disp = true;
        this.prateleira.push(p);
    }
    abastecimento_geral() {
        this.prateleira.forEach(produto => {
            produto._disp = true;
            this.prateleira.push(produto);
        });
    }
    produtos_abastecidos() {
        this.prateleira.forEach(p => {
            console.log("Produto: " + p.nome + ",  validade: " + p.Validade);
        });
    }
    listarProdutos(produtos) {
        let d = "";
        produtos.forEach(produto => {
            if (`${produto._disp} == false`) {
                d = "no estoque";
            }
            else {
                d = "abastecido";
            }
            console.log(`Nome: ${produto.nome}, Validade: ${produto.Validade}, Situação:${d}`);
        });
    }
    produtos_no_estoque() {
        let total = this.deposito.banheiro.length + this.deposito.cozinha.length + this.deposito.especificos.length + this.deposito.geral.length + this.deposito.lavanderia.length;
        console.log("total de itens no estoque: " + total);
        this.listarProdutos(this.deposito.todos);
    }
}
let deposito = new Estoque_1.Estoque();
let loja = new Loja();
let produto1 = new Produto_1.Produto(15.50, "24/02/2025", "sabão em pó ype", "lavanderia");
let produto2 = new Produto_1.Produto(10, "25/04/2023", "limpador multiuso veja", "geral");
let produto3 = new Produto_1.Produto(9, "10/02/2022", "desinfetante pinho sol", "banheiro");
let produto4 = new Produto_1.Produto(9, "24/5/2022", " limpa vidros pinho sol", "especificos");
deposito.adicionar(produto1);
deposito.adicionar(produto2);
deposito.adicionar(produto3);
deposito.adicionar(produto4);
loja.abastecer(produto1);
loja.abastecer(produto2);
loja.produtos_no_estoque();
