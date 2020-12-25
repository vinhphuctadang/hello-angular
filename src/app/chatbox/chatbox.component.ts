import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
// import { Socket } from 'dgram'
import { ChatserviceService } from '../chatservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './chatbox.component.html',
})

export class ChatboxComponent implements OnInit, AfterViewInit {

  name: string = 'Messages'

  @ViewChild('messages') messages!: ElementRef
  constructor(private chatService: ChatserviceService) {
  }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe(data => {
      console.log(data)
      this.messages.nativeElement.insertAdjacentHTML('afterBegin', `<li>${data}</li>`)
    })
  }

  ngAfterViewInit() : void {
    let msgList : [string, string, string] = [
      'hello',
      'hi',
      'i wanna buy some milk'
    ]

    for(let msg of msgList) {
      this.messages.nativeElement.insertAdjacentHTML('afterBegin', `<li>${msg}</li>`)
    }    
  }
}

