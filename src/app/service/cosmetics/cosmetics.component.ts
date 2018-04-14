import { Component, OnInit } from '@angular/core';
import { CosmeticsService } from './cosmetics.services';
import { Cosmetics } from './cosmetics.model';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent implements OnInit {

  cosmetics:Cosmetics[];

  constructor(private cosmeService:CosmeticsService) { }

  ngOnInit() {
    this.cosmetics = this.cosmeService.getCosmes();
  }

  
}
