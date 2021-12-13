export class PedidoDelivery{
    constructor(){
        this.pedidos=[];
        this.numeroPedido;
        this.preco;
        this.total;
        this.endereco;
        this.quantidade;
        this.status;
        this.data;
        this.desconto
    }
    totalPedidos(){
        return this.pedidos.map(el=>el.total).reduce((acc,el) => acc+el,0)
    }
    total(){
        return this.total = this.totalPedidos() -(1*desc)
    }
}




