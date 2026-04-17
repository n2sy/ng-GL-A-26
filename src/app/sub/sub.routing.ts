import { RouterModule, Routes } from '@angular/router';
import { ListServers } from './list-servers/list-servers';
import { InfoServer } from './info-server/info-server';
import { EditServer } from './edit-server/edit-server';

const subRoutes: Routes = [
  {
    path: '',
    component: ListServers,
    children: [
      { path: ':serverId', component: InfoServer },
      { path: ':serverId/edit', component: EditServer },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
