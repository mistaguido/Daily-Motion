import { Component } from '@angular/core';
import Video from './models/Video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoData:Video = {} as Video
  title = 'dailymotion';
}
