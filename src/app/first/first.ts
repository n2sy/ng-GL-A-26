import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
})
export class First {
    prenom : string = "Nidhal";
    year : number = 2026;
    bgColor : string = "pink";
    hd : boolean = false;
    
    showAlert() {
        alert("J'ai été cliqué")
    }
    
    updatePrenom(inp) {
        console.log(inp);
        
        this.prenom = inp
    }
}
