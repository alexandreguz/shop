export class OrderDetails {
    public id: number;
    public user_id: number;
    public order_id: number;
    public product_id: number;
    public quantity: number;

    constructor(id: number, order_id: number, product_id: number, quantity: number, user_id: number){
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.user_id = user_id;
        }
    }
