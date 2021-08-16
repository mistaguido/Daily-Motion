import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DailyMotionService } from '../daily-motion.service';
import { HttpClient } from '@angular/common/http';
import Video from '../models/Video';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  dailyMotionSub = new Subscription()
  currentList:Video[] = []

  constructor(private dms : DailyMotionService) { }

  ngOnInit(): void {
    this.dailyMotionSub = this.dms.dailyMotionService.subscribe(
      (data) => {
        this.currentList=data
      }
    )
  }

  search = (searchterm : string) => {
    this.dms.search(searchterm)
  }

  ngOnDestroy(){
    this.dailyMotionSub.unsubscribe()
  }

}
