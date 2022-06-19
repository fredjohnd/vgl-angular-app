import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vgl-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDetailComponent implements OnInit {

  game = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.game = this.route.snapshot.params['gameId'];
  }
}
