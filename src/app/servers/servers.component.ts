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

    constructor() {
        setTimeout(() => { this.allowNewServers = true; }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverWasCreated = true;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (event.target as HTMLInputElement).value;
    }
}
