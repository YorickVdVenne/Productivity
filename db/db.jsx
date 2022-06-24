import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  objectives: '++id, objective, quarter, progress', // Primary key and indexed props
  results: '++id, result, objectiveKey, progress',
  completed: '++id, title, q, objectiveKey'
});
