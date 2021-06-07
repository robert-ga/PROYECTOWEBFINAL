import { Component, OnInit } from '@angular/core';
import { BusService, Buses} from '../SERVICIOS/bus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RutasService, Ruta } from '../SERVICIOS/rutas.service';

@Component({
  selector: 'app-seleccionar-viaje',
  templateUrl: './seleccionar-viaje.component.html',
  styleUrls: ['./seleccionar-viaje.component.css']
})
export class SeleccionarViajeComponent implements OnInit {
  
  
  BusListas: Buses[]=[];
  RutasListas: Ruta[]=[];
  RutasL: Ruta[]=[];
  constructor(private BusService:BusService, private router:Router,private activaRoute:ActivatedRoute,private RutasService:RutasService) { }

  ngOnInit(): void {
    this.listarBus();
  }
  listarBus()
  {
    this.BusService.getBuses().subscribe(
      res=>{
        console.log(res)
        this.BusListas=<any>res;
      },
      err=>console.log(err)
    );
  }

}
