import { Component, inject } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
    productSer = inject(GestionProducts);
    
    ajouterProduit(nameValue, priceValue, checkedValue) {
        this.productSer.addProduct(
            {
                name : nameValue,
                price : priceValue,
                isSelected : checkedValue,
            }
        )
    }
}
