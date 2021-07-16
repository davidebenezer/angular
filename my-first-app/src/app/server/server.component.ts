import {Component} from '@angular/core';

@Component({
  // selector: 'app-server',
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styles: [`h3{
  color: brown;
}`]
})
export class ServerComponent{
  serverId: number = 11223;
  serverStatus: string = 'Active';

  getServerStatus(): string{
    return this.serverStatus;
  }
}
