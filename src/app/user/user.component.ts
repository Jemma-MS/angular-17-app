import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//este es el que se manda a llamar para montarlo
export class UserComponent {
  username = 'jemma';
  isLoggedIn = true;

}
