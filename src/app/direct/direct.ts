import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  imports: [NgStyle, NgClass],
  templateUrl: './direct.html',
  styleUrl: './direct.css',
})
export class Direct {
  bgColor = 'pink';
  txtColor = 'grey';
  font = 'phosphate';
}
