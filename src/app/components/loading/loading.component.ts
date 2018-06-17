import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  closeButton() {
    this.messageService.stopLoading();
  }
}
