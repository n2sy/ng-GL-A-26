import { Routes } from '@angular/router';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';
import { Accueil } from './accueil/accueil';
import { Add } from './add/add';
import { Cv } from './cv/cv';
import { Edit } from './edit/edit';
import { allowLoginGuard } from './guards/allow-login-guard';
import { quitterFormGuard } from './guards/quitter-form-guard';
import { withTokenGuard } from './guards/with-token-guard';
import { Infos } from './infos/infos';
import { Login } from './login/login';
import { ManageServers } from './manage-servers/manage-servers';
import { NotFound } from './not-found/not-found';
import { HomeProducts } from './produts/home-products/home-products';
import { ReactForm } from './react-form/react-form';

export const myRoutes: Routes = [
  { path: '', component: Accueil },
  {
    path: 'cv',

    children: [
      { path: '', component: Cv },
      {
        path: 'add',
        component: Add,
        canActivate: [withTokenGuard],
        canDeactivate: [quitterFormGuard],
      },
      { path: ':id', component: Infos },
      { path: ':id/edit', component: Edit, canActivate: [withTokenGuard] },
    ],
  },
  { path: 'accounts', component: HomeAccounts },
  { path: 'manage-servers', component: ManageServers },
  { path: 'login', component: Login, canActivate: [allowLoginGuard] },
  { path: 'react', component: ReactForm },
  { path: 'products', component: HomeProducts },
  { path: 'servers', loadChildren: () => import('./sub/sub-module').then((m) => m.SubModule) },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' },

  //Version 1 avec children
  // { path: '', component: Accueil },
  // {
  //   path: 'cv',
  //     component: Cv,
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
