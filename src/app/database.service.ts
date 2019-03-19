import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { TODO } from './todo';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
todos: Dexie.Table<TODO, string>;
  constructor() {
    super('todo-db');
    this.version(1).stores({
      todos: 'id, title, done',
    });
     }
}
