import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from '../models/Video';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  userdataSub = new Subscription()
  videos:Video[] = [];


  constructor(private uds : UserDataService) { }

  ngOnInit(): void {
    this.userdataSub = this.uds.userDataObservable.subscribe(
      (data) => {
        this.videos = data
      }
    )
  }

  clear = () =>{
    this.uds.removeAll()
  }

  ngOnDestroy() {
    this.userdataSub.unsubscribe();
  }
}
