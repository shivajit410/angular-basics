import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = "No server was created.";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];
  buttonClicked = false;
  count = [];

  // userCreationStatus = "No user was created.";
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
    // this.count.push(this.count.length + 1);
    this.count.push(new Date);
  }

}
