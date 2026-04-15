import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Preco } from './preco/preco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Preco],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-sapatos');
}
