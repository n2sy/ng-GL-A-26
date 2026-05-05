import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServers } from '../gestion-servers';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.html',
  styleUrl: './edit-server.css',
  standalone: false,
})
export class EditServer {
  serverToEdit;
  activatedRoute = inject(ActivatedRoute);
  serverSer = inject(GestionServers);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverToEdit = this.serverSer.getServerById(p.get('serverId'));
      },
    });
  }
}
