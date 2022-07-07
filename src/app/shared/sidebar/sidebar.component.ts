import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

//Indicarle a TS  que la siguiente declaración $ (jquery) ya existe en el alcance global de la aplicación
declare let $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit,AfterViewInit {

  menuItems!: any[];

  constructor( private sidebarService: SidebarService ) {

  }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems)
  }

  ngAfterViewInit(): void {
  /***** Una vez q los elementos del menú están definidos, inicilizo el plugin de jquery para animarlos,
   ** esta instrucción está definida en el archivo custom.js, pero como el componente Sidebar aun no existe cuando la pp se inicia,
   ** entonces no encuentra la referencia alguna del elemento(para inicializarlo ), por lo que se u animación no existe */
  $('#sidebarnav').AdminMenu();
  }

}
