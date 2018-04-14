import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmeticsService } from '../cosmetics.services';
import { Cosmetics } from '../cosmetics.model';
import { Item } from '../../../shopping-cart/item.model';
import { CartService } from '../../../shopping-cart/cart.service';

@Component({
  selector: 'app-cosme-detail',
  templateUrl: './cosme-detail.component.html',
  styleUrls: ['./cosme-detail.component.css']
})
export class CosmeDetailComponent implements OnInit {

  cosmetic:Cosmetics;

  constructor(private route:ActivatedRoute,private cosmeService:CosmeticsService,private cartService:CartService) { }

  ngOnInit() {
    const name= this.route.snapshot.params['name'];
    this.cosmetic = this.cosmeService.getCosme(name);
  }

  onAddtoCart(cosme:Cosmetics){
    this.cosmeService.addCosmeToCart(cosme);
  }

}
