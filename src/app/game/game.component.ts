import { Component, OnInit } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if(!this.pickCardAnimation)
    this.currentCard = this.game.stack.pop() as string;
    this.pickCardAnimation = true;

    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
  }
}
