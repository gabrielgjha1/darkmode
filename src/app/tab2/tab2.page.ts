import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public alive: any;
  public dead: any;
  public isLoading = true;
  constructor(private apiService: ApiService) {}

  async ngOnInit(){
    this.isLoading = true;
    this.alive = await this.apiService.getDeadCharacters();
    this.dead = await this.apiService.getDeadCharacters();
    console.log('this.alive',this.alive);
    console.log('this.dead',this.dead);
    this.isLoading = true;
    

  }

}
