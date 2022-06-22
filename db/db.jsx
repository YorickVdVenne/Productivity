import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  objectives: '++id, objective, quarter', // Primary key and indexed props
});
