import { MainDataService } from 'src/app/main-data.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private mainDataService: MainDataService) { }

}
