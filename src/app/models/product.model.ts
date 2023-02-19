export class Product {
    public id:number;
    public title:string;
    public image:string;
    public description:string;
    public price:number;
    public quantity:number;
    public short_desc:string;
    public cat_id:number;

    constructor(id: number, title: string, image: string, description:string, price:number,
                quantity:number, short_desc:string, cat_id:number){
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.short_desc = short_desc;
        this.cat_id = cat_id
        }
    }
