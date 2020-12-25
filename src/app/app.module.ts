import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

import { ChatserviceService } from './chatservice.service'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:8888', options: {} };
 
@NgModule({
  declarations: [
    ChatboxComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ ChatserviceService ],
  bootstrap: [ ChatboxComponent ]
})
export class AppModule { }
