import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  imports: [RouterLink],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
    id;
    private actRoute = inject(ActivatedRoute)
    
    
    ngOnInit() {
       this.id = this.actRoute.snapshot.paramMap.get('id');
       
    }
        
    

}
