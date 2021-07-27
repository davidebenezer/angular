import {Component} from '@angular/core';

@Component({
  // selector: 'app-server',
  // tslint:disable-next-line:component-selector
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styles: [`h3{
  color: brown;
} .online{color: white;}`]
})
export class ServerComponent{
  serverId = Math.floor(Math.random() * 1000);
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'Online' : 'Offline';
    console.log('serverId:', this.serverId, ',serverStatus:', this.serverStatus);
  }

  getServerStatus(): string{
    return this.serverStatus;
  }

  getColor(): string{
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
