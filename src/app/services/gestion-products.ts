import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProducts {
    allProducts = signal<any[]>([
      
    ]);
    
    constructor() {
        this.allProducts.set([
            {
                name : "produit 1",
                price : 321,
                isSelected : true,
                id : 1
            },
            {
                name : "produit 2",
                price : 433,
                isSelected : false,
                id : 2
            }
        ])
    }
}
