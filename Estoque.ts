import { Produto } from "./Produto";

export class Estoque {
     geral: Produto[] = [];
     banheiro: Produto[] = [];
     cozinha: Produto[] = [];
     lavanderia: Produto[] = [];
     especificos: Produto[] = [];
     todos: Produto[] = [];



    public adicionar(produto: Produto) {
        this.todos.push(produto);
        if (produto.tipo == "geral") {
            this.geral.push(produto);

        } else if (produto.tipo == "banheiro") {
            this.banheiro.push(produto);

        } else if (produto.tipo == "cozinha") {
            this.cozinha.push(produto);

        } else if (produto.tipo == "lavanderia") {
            this.lavanderia.push(produto);

        } else if (produto.tipo == "especificos") {
            this.especificos.push(produto);

        } else {
            console.log("não é possivel cadastrar este produto pois seu tipo é inválido")
        }

    }
    



}
