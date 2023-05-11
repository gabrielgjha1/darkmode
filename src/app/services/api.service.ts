import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private apiEndpoint = 'https://rickandmortyapi.com/api/';
  async getEpisodes() {
    const url = this.apiEndpoint + 'episode';
    const episodes$ = this.http.get(url);
    return firstValueFrom(episodes$);
  }

  getLiveCharacters(): Promise<any> {
    const url = this.apiEndpoint + 'character/' + '?status=alive';
    console.log(url);
    const alive$ = this.http.get(url).pipe(
      map((resp: any)=> resp.results)
    );
    return firstValueFrom(alive$);
  }

  getDeadCharacters(): Promise<any> {
    const url = this.apiEndpoint  + 'character/' + '?status=dead';
    console.log(url);
    const dead$ = this.http.get(url).pipe(
      map((resp: any)=> resp.results)
    );
    return firstValueFrom(dead$);
  }
}
