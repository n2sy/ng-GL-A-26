import { Routes } from "@angular/router";
import { Cv } from "./cv/cv";
import { HomeAccounts } from "./accounts/home-accounts/home-accounts";
import { ManageServers } from "./manage-servers/manage-servers";
import { HomeProducts } from "./produts/home-products/home-products";
import { Accueil } from "./accueil/accueil";
import { Infos } from "./infos/infos";


export const myRoutes : Routes = [
    {path : '' , component : Accueil},
    {path : 'cv' , component : Cv},
    {path : 'cv/:id' , component : Infos},
    {path : 'accounts' , component : HomeAccounts},
    {path : 'servers' , component : ManageServers},
    {path : 'products' , component : HomeProducts},
]



