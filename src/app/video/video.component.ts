import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from '../models/Video';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  userdataSub = new Subscription();

  constructor(private uds:UserDataService) { }

  @Input() video:Video = {} as Video
  inPlaylist:boolean = false;

  ngOnInit(): void {
    this.userdataSub = this.uds.userDataObservable.subscribe(
      (data) => {
        this.inPlaylist = (data.includes(this.video))  
      }
    )
  }

  addVideo = (vid:Video) =>{
    this.uds.addVideo(vid)
    this.inPlaylist = true
  }
}
