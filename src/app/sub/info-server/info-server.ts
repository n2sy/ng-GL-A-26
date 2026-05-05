import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServers } from '../gestion-servers';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.html',
  styleUrl: './info-server.css',
  standalone: false,
})
export class InfoServer {
  selectedServer;
  activatedRoute = inject(ActivatedRoute);
  serverSer = inject(GestionServers);
  blockEdit: boolean;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serverSer.getServerById(p.get('serverId'));
      },
    });

    this.activatedRoute.queryParamMap.subscribe({
      next: (p: ParamMap) => {
        this.blockEdit = p.get('allowEdit') == '0' ? true : false;
      },
    });
  }
}
