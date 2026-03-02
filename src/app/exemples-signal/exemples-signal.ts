import { Component, signal, WritableSignal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-exemples-signal',
  imports: [],
  templateUrl: './exemples-signal.html',
  styleUrl: './exemples-signal.css',
})
export class ExemplesSignal {
    language : WritableSignal<string> = signal<string>('java');
    year = signal<number>(2026);
    
    resultat = computed(() => {
        return `J'aime le language ${this.language()}`
    });
    
    constructor() {
       effect(() => {
        alert("Year est passé à " + this.year())
       })
    }
    
    updateLanguage() {
        
        this.language.set("Php")
    }
    
    updateResultat() {
        // this.resultat.
    }
    
    updateYear() {
        this.year.update((prev) => {            
            return ++prev;
        })
    }
    updateLanguageV2() {
        this.language.update((previousValue) => {
            return `${previousValue} et Ruby`
        })
        
    }

}
