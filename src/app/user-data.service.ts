import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Video from './models/Video';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userDataObservable = new BehaviorSubject<Video[]>([]);
  
  playlist:Video[] = [];

  constructor() {}

  getPlaylist = () => {
    this.userDataObservable.next(this.playlist)
  }

  addVideo = (video : Video) => {
    this.playlist.push(video);
    this.getPlaylist()
  }

  removeAll = () => {
    this.playlist = [];
    this.getPlaylist()
  }
}
