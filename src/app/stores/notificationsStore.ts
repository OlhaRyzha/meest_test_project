import { makeAutoObservable } from "mobx";

export default class NotificationsStore {
  notifications: string[] = ["n1"];

  constructor() {
    makeAutoObservable(this);
  }

  get countNotifications() {
    return this.notifications.length;
  }
}