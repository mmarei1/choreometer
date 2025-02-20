import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../../services/chore.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chore-tracker',
  templateUrl: './chore-tracker.component.html',
  styleUrls: ['./chore-tracker.component.css']
})
export class ChoreTrackerComponent implements OnInit {
  chores = [{ name: "Cooking Breakfast", value: 3 }, { name: "Cooking Lunch", value: 4 }, { name: "Cooking Dinner", value: 5 }];
  player1Score = 0;
  player2Score = 0;
  chart: any;
  constructor(private choreService: ChoreService) {}
  ngOnInit() { this.updateChart(); }
  completeChore(chore: any, player: string) {
    this.choreService.addChore({ ...chore, completedBy: player }).subscribe(() => {
      player === 'Player 1' ? this.player1Score += chore.value : this.player2Score += chore.value;
      this.updateChart();
    });
  }
  updateChart() {
    if (this.chart) { this.chart.destroy(); }
    this.chart = new Chart("choreChart", {
      type: 'pie',
      data: { labels: ['Player 1', 'Player 2'], datasets: [{ data: [this.player1Score, this.player2Score], backgroundColor: ['blue', 'pink'] }] }
    });
  }
}