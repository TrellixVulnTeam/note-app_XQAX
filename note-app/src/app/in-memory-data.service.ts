import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './notes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: Note[] = [
      {
        id: 0,
        title: 'Note Lorem',
        date: new Date('2022-05-21'),
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 1,
        title: 'Note Ipsum',
        date: new Date('2022-03-24'),
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 2,
        title: 'Note general',
        date: new Date('2022-01-21'),
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 3,
        title: 'Note test',
        date: new Date('2022-04-15'),
        text: 'Some quick example text to build on the card title.',
      },
    ];
    return { notes };
  }
  constructor() {}
}
