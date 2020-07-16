import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service'

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  name1: string; 

  constructor(private nameService : NameServiceService) { }

  ngOnInit(): void {  
  }

  saveName() {
    this.nameService.setName(this.name1); 
  }
}
