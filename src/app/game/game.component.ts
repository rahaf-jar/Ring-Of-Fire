import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']  // Note the correct property name is style**Urls**
})
export class GameComponent {
  pickCardAnimation = false;

  takeCard(){
    this.pickCardAnimation = true;
  }
}
