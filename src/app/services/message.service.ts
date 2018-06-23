import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message = 'Loading';
  loading = false;
  fail = false;
  success = false;
  constructor() { }

  load(message) {
    this.loading = true;
    this.message = message;
  }

  loadDone(success) {
    if (success) {
      this.fail = false;
      this.success = true;
    } else {
      this.fail = true;
      this.success = false;
    }
  }

  stopLoading() {
    this.loading = false;
    this.message = 'Loading';
    this.fail = false;
    this.success = false;
  }
}
