import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServers {
  allServers = [
    {
      id: 1,
      name: 'Nidhal Server',
      status: 'offline',
    },
    {
      id: 2,
      name: 'Sofiene Server',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Dhia Server',
      status: 'online',
    },
  ];

  getServerById(serverId) {
    return this.allServers.find((s) => s.id == serverId);
  }
}
