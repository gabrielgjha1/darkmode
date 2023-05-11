import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public episodes: any;
  public isLoading = true;
  constructor(private apiService: ApiService) {}
  async ngOnInit() {
    this.isLoading = true;
    this.episodes = await this.apiService.getEpisodes();
    this.isLoading = false;
  }
}
