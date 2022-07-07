import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../services/settings.service";

// indicamos a TS que la función está declarada de manera global
// en el indice.html, realizanso una modificación al archivo original
//encapsulandose el contenido del mismo en una función

declare function customInitFunctions(): void;//hay que especificar que no devuelve nada

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {


  constructor( private settingsService: SettingsService ) {
    customInitFunctions();
  }

  ngOnInit(): void {
    // Función alojado en ./assets/js/custom.js
    customInitFunctions();


  }


}
