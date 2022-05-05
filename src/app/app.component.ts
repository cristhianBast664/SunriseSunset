import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from './service/consumo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  prueba:any;

  bandera = false;
  latitud:string = '';
  longitud:string = '';

  list: any = [];

  arraypruebas = [];



  constructor(
    private consumoService: ConsumoApiService
  ) {

  }

  ngOnInit(): void {
    this.cargarDatos(this.latitud, this.longitud);
  }

  cargarDatos(lat: string, long: string) {
    this.consumoService.getAPI(lat, long)
        .subscribe(data => {
          this.list = data;
        });
  }
}
