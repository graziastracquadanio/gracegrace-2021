import type { History } from 'history';
import { action, makeAutoObservable } from 'mobx';

export class RoutingStore {
  historyInstance?: History;

  constructor() {
    makeAutoObservable(this, { setHistoryInstance: action });
  }

  setHistoryInstance = (history: History) => {
    this.historyInstance = history;
  };

  get history(): History {
    if (!this.historyInstance) {
      throw new Error('history was used before it was created');
    }
    return this.historyInstance;
  }
}
