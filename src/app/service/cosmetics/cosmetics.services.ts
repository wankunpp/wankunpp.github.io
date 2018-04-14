import { Cosmetics } from "./cosmetics.model";
import { Injectable } from "@angular/core";
import { CartService } from "../../shopping-cart/cart.service";
import { Item } from "../../shopping-cart/item.model";


@Injectable()
export class CosmeticsService{
    private cosmetics:Cosmetics[]=[
        {'name':'shuazi1','price':200,'imgUrl':'../../assets/img/cosmetics/images.jpeg','description':'this is the first item'},
        {'name':'shuazi2','price':300,'imgUrl':'../../assets/img/cosmetics/machiajul-pasagera.jpg','description':'this is the first item'},
        {'name':'shuazi3','price':400,'imgUrl':'../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg','description':'this is the first item'},
        {'name':'shuazi4','price':500,'imgUrl':'../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg','description':'this is the first item'},
        {'name':'shuazi5','price':600,'imgUrl':'../../assets/img/cosmetics/pedzle-przechowywanie.jpg','description':'this is the first item'}
    ];

    constructor(private cartService:CartService){}

    getCosmes(){
        return this.cosmetics.slice();
    }

    getCosme(name:string){
        return this.cosmetics.find(
            cosme=> cosme.name===name
        )
    }

    addCosmeToCart(cosme:Cosmetics){
       const item = this.cartService.getCart().find(
           item=>item.name === cosme.name
       )
       if(item != null){
            this.cartService.updateItem(item);
       }else{
           const newItem = new Item(cosme.name,cosme.description,cosme.imgUrl,cosme.price,1);
           this.cartService.addToCart(newItem);
       }
       
    }
}