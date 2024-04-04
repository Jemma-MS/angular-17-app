import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [ ],
  template: `
  <h3> These are {{ username }}'s favorite games </h3>
    <ul>
      @for ( game of games; track game.id ) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() username = '' ;
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavouriteEvent.emit( gameName );

  }

  games = [

    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Red Dead Redemption 1'
    },
    {
      id: 3,
      name: 'The Last of Us Part 2'
    },
    {
      id: 4,
      name: 'Red Dead Redemption 2'
    },
    {
      id: 5,
      name: 'Grand Theft Auto V'
    },
    {
      id: 6,
      name: 'Sleeping Dogs'
    }

  ]
}
