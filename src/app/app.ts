import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Header, Home, Sobre, Contato, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projeto');
}
