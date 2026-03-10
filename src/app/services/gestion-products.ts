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
            },
            {
                name : "produit 3",
                price : 887,
                isSelected : true,
                id : 3
            }
        ])
    }
    
    addProduct(newProduct) {
       //newProduct.id = crypto.randomUUID();
       newProduct.id = this.allProducts()[this.allProducts().length - 1].id + 1;
        this.allProducts.update(previous => {
            return [...previous, newProduct]
        })
    }
    
    deleteProduct(id) {
        let i = this.allProducts().findIndex(product => product.id == id)        
        this.allProducts().splice(i, 1)
    }
    
    updateSelectedProduct(idProduct) {
        let i = this.allProducts().findIndex(product => product.id == idProduct)
        let productToUpdate = this.allProducts()[i];
        productToUpdate.isSelected = !productToUpdate.isSelected;
        this.allProducts.update(previous => {
            let tab = this.allProducts().filter(product => product.id != idProduct);
            return [...tab, productToUpdate]
        })
    }
}
