import { Component } from '@angular/core'

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent {
    heroes: string[] = ['Spideman', 'Ironman', 'Hulk', 'Thor'];
    heroesBorrados: string[] = [];


    borrarHeroe(){
      this.heroesBorrados = this.heroes.splice(length -1);
        console.log(this.heroesBorrados)
    }
}