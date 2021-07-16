import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<div class="container"><div class="row"><div class="col-xs-12"><h1>List of Servers' +
    `<!--<input type="text" class="form-control" (input)="onEnterServerName($event)">-->
    <input type="text" class="form-control" [(ngModel)]="serverName">
    <button class="btn btn-primary" [disabled]="!addServer" (click)="onCreateServer()">Add Server</button><br>
     </h1><hr>
     <!--<p [innerText]="addServer"></p>-->
     <!--{{serverName}}-->
     <br>
     <!--{{serverCreationStatus}}-->
     <p *ngIf="isServerCreated; else noServer">{{serverCreationStatus}}</p>
     <ng-template #noServer>
       <p>{{serverCreationStatus}}</p>
     </ng-template>
     <div app-server></div><div app-server></div><hr> Testing multiline

to see if it works in combination with single quotes. it does work :)</div></div></div>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  isServerCreated = false;

  constructor() {
    setTimeout(() => this.addServer = true, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): string{
    this.serverCreationStatus = 'Server Created Successfully. ServerId: '+this.serverName;
    this.isServerCreated = true;
    return this.serverCreationStatus;
  }

  // tslint:disable-next-line:typedef
  onEnterServerName(event: Event): string{
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (event.target as HTMLInputElement).value;
    return  this.serverName;
  }

}
