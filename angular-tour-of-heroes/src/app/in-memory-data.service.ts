import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Slippery Jim' },
      { id: 12, name: 'Sum Ting Wong' },
      { id: 13, name: 'Jhonny No Stash' },
      { id: 14, name: 'NEGA-CHIN' },
      { id: 15, name: '스프라이트' },
      { id: 16, name: 'Sirius & Friends' },
      { id: 17, name: "Q'uru"},
      { id: 18, name: 'G.O.A.T Ruslee' },
      { id: 19, name: 'Hero Hiro' },
      { id: 20, name: 'Furkan' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
