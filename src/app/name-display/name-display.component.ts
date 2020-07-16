import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service'

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  displayName: string; 

  constructor(private nameService : NameServiceService) { }

  ngOnInit(): void {
  }

  loadName() {
    this.displayName = this.nameService.getName();
  }

}
