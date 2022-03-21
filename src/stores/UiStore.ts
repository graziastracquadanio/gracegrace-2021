import { makeAutoObservable, runInAction } from 'mobx';

import type { Message, MessageType } from 'types/message';

export class UiStore {
  loading = false;
  notification: Message | null = null;

  private currentTimerId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  addNotification = (text: string, type?: MessageType, life: number = 2000) => {
    if (this.currentTimerId) {
      window.clearTimeout(this.currentTimerId);
    }

    this.notification = {
      text,
      type,
      life,
    };

    this.currentTimerId = window.setTimeout(() => {
      runInAction(() => {
        this.notification = null;
        this.currentTimerId = null;
      });
    }, life);
  };

  addFailNotification(text: string) {
    this.addNotification(text, 'danger', 5000);
  }
}
