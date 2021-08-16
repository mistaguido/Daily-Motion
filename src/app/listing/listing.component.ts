import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DailyMotionService } from '../daily-motion.service';
import Video from '../models/Video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() videos:Video[] = [];

  constructor(private dms : DailyMotionService) { }

  ngOnInit(): void {
  }
}
