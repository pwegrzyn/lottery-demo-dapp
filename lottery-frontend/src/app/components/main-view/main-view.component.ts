import { Component, OnInit } from '@angular/core';
import {RollService} from '../../services/roll.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  providers: [RollService]
})
export class MainViewComponent implements OnInit {

  balance: any;

  constructor(private rollService: RollService) { }

  ngOnInit(): void {
    this.rollService.getUserBalance()
      .then((balance) => {
        this.balance = balance;
      });
  }

}
