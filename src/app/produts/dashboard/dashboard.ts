import { Component, computed, inject } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    productSer = inject(GestionProducts);
    nbSelected = computed(() => {
        let t = this.productSer.allProducts().filter(product => product.isSelected == true);
        return t.length;
    })
    
    prixTotal = computed(() => {
        let t = this.productSer.allProducts().filter(product => product.isSelected == true);
        return t.reduce((total, product) => total = total + product.price, 0)
    })
}
