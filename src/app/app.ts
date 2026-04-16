import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Preco } from './preco/preco';
import { Texto } from './texto/texto';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Preco, Texto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-sapatos');
}
