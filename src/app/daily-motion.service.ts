import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Video from './models/Video';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {

  dailyMotionService = new BehaviorSubject<Video[]>([]);
  currentList:Video[] = []

  constructor(private http : HttpClient) { 
  }

  search = (searchterm : string) => {
    this.http.get<any>("https://api.dailymotion.com/videos?"+
    "fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=" + searchterm)
    .subscribe(
      (data) => {
        this.currentList = data["list"]
        console.log(this.currentList)
        this.dailyMotionService.next(this.currentList)
      }
    )
  }
}
