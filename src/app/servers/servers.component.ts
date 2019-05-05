import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServers = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    serverWasCreated = false;
    servers = [];
    constructor() {
        setTimeout(() => { this.allowNewServers = true; }, 2000);
        for (let i = 0; i < 10; i++ ) {
            this.servers.push( 'ServerID: ' + Math.random() * 10000);
        }
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.servers.push(this.serverName);
        this.serverWasCreated = true;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (event.target as HTMLInputElement).value;
    }
}
