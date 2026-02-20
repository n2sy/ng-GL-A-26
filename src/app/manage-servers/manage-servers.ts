import { DatePipe, NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short-pipe';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass, UpperCasePipe, TitleCasePipe, DatePipe, ShortPipe],
  templateUrl: './manage-servers.html',
  styleUrl: './manage-servers.css',
})
export class ManageServers {
  allServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2023, 4, 5),
      status: 'critical',
    },
    {
      name: 'Testing Development Server',
      type: 'large',
      date_d: new Date(3, 3, 2023),
      status: 'stable',
    },
    {
      name: 'Development Server',
      type: 'medium',
      date_d: new Date(4, 5, 2023),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      date_d: new Date(4, 5, 2023),
      status: 'stable',
    },
  ];

  affecterClasse(serv) {
    return {
      'list-group-item-success': serv.status == 'stable',
      'list-group-item-danger': serv.status == 'critical',
      'list-group-item-warning': serv.status == 'offline',
    };
  }
}
