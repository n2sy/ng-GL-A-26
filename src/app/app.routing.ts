import { Routes } from '@angular/router';
import { Cv } from './cv/cv';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';
import { ManageServers } from './manage-servers/manage-servers';
import { HomeProducts } from './produts/home-products/home-products';
import { Accueil } from './accueil/accueil';
import { Infos } from './infos/infos';
import { NotFound } from './not-found/not-found';
import { Add } from './add/add';
import { Edit } from './edit/edit';

export const myRoutes: Routes = [
  { path: '', component: Accueil },
  {
    path: 'cv',
    component: Cv,
    children: [
      { path: 'add', component: Add },
      { path: ':id', component: Infos },
      { path: ':id/edit', component: Edit },
    ],
  },
  { path: 'accounts', component: HomeAccounts },
  { path: 'manage-servers', component: ManageServers },
  { path: 'products', component: HomeProducts },
  { path: 'servers', loadChildren: () => import('./sub/sub-module').then((m) => m.SubModule) },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' },

  //Version 1 avec children
  // { path: '', component: Accueil },
  // {
  //   path: 'cv',
  //   children: [
  //     { path: '', component: Cv },
  //     { path: 'add', component: Add },
  //     { path: ':id', component: Infos },
  //     { path: ':id/edit', component: Edit },
  //   ],
  // },
  // { path: 'accounts', component: HomeAccounts },
  // { path: 'servers', component: ManageServers },
  // { path: 'products', component: HomeProducts },
  // { path: 'not-found', component: NotFound },
  // { path: '**', redirectTo: 'not-found' },

  //Verision sans children
  // { path: '', component: Accueil },
  // { path: 'cv', component: Cv },
  // { path: 'cv/add', component: Add },
  // { path: 'cv/:id', component: Infos },
  // { path: 'cv/edit/:id', component: Edit },
  // { path: 'accounts', component: HomeAccounts },
  // { path: 'servers', component: ManageServers },
  // { path: 'products', component: HomeProducts },
  // { path: 'not-found', component: NotFound },
  // { path: '**', redirectTo: 'not-found' },
];
