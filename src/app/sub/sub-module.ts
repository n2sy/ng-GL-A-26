import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditServer } from './edit-server/edit-server';
import { InfoServer } from './info-server/info-server';
import { ListServers } from './list-servers/list-servers';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [EditServer, InfoServer, ListServers],
  imports: [CommonModule, SUB_ROUTING, FormsModule],
})
export class SubModule {}
