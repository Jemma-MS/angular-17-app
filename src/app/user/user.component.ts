import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//este es el que se manda a llamar para montarlo
export class UserComponent {
  username = 'Jemma';
  isLoggedIn = false;  // <-- esto funcioan como un State
  favGame = '';

  getFavourite(gameName: string) {
    this.favGame = gameName;
  }


  greet(){
    alert('Helloooooo ' + this.username )
  }
}
