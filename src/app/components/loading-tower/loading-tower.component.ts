import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-tower',
  standalone: true,
  imports: [],
  templateUrl: './loading-tower.component.html',
  styleUrl: './loading-tower.component.scss',
})
export class LoadingTowerComponent implements OnInit {
  blocks: any[] = [];

  ngOnInit(): void {
    this.addBlocks();
  }

  addBlocks() {
    let i = 0;
    const interval = setInterval(() => {
      this.blocks.push({});
      i++;
      if (i >= 10) {
        clearInterval(interval);
      }
    }, 500);
  }
}
