import {
  Component,
  ViewChild
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  Chart
} from 'chart.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  greens: number;
  reds: number;
  doughnutChart: any;
  constructor(public navCtrl: NavController) {
    this.greens = 0;
    this.reds = 0;
  }


  addGreens(): void {
    this.greens++;
    this.displayChart();
  }

  addReds(): void {
    this.reds++;
    this.displayChart();
  }

  displayChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.greens, this.reds],
          backgroundColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(255, 0, 0, 1)'
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        title: {
          display: false,
          fontStyle: 'bold',
          fontSize: 18
        }
      },

    });
  }

}
