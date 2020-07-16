import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {

  private name: string; 

  constructor() { }

   getName() : string {
     return this.name; 
   }

   setName(newName: string) {
      this.name = newName; 
   }

}
