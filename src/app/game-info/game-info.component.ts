import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardActions = [
    { title: 'Waterfall', description: 'Everyone starts drinking at the same time. You can only stop when the person before you stops.' },
    { title: 'You', description: 'Choose someone to drink.' },
    { title: 'Me', description: 'You drink.' },
    { title: 'Floor', description: 'Last person to touch the floor drinks.' },
    { title: 'Guys', description: 'All guys drink.' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Last person to raise their hand drinks.' },
    { title: 'Mate', description: 'Pick a mate. Every time you drink, they drink too.' },
    { title: 'Rhyme', description: 'Say a word. Go around in a circle rhyming with it. First to fail drinks.' },
    { title: 'Categories', description: 'Pick a category (e.g., car brands). Players name something in that category. First to fail drinks.' },
    { title: 'Never Have I Ever', description: 'Say a "Never have I ever..." statement. Anyone who has done it drinks.' },
    { title: 'Question Master', description: 'Until another Q is drawn, if you ask a question and someone answers it, they drink.' },
    { title: 'King', description: 'First 3 Kings pour some of their drink into the King’s Cup. The 4th King drinks the whole thing.' }
  ];

  title:string = '';
  description:string = '';
  @Input() card: string = '';

  ngOnChanges(): void {
    if (this.card) {
      console.log('current Card is:', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardActions[cardNumber - 1].title;
      this.description = this.cardActions[cardNumber - 1].description;
    }
  }
}
