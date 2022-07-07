import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'

})
export class BreadcrumbsComponent  implements OnDestroy {

  public titulo!: string;
  public tituloSubs$: Subscription;


  constructor( private router: Router, private route: ActivatedRoute ) {
    // -> estamos aplicando la desestructuración ({ titulo }), y estrayendo el titulo
    this.tituloSubs$ = this.getArgumentosRuta().subscribe( ({ titulo }) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${ titulo }`;
      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


  getArgumentosRuta() {


    return this.router.events
      .pipe(
        filter( (event: any) => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
        map( (event: ActivationEnd) => event.snapshot.data ),
      );


  }


}
