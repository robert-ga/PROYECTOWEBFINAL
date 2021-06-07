import { Component, OnInit } from '@angular/core';
import { ServAdminService } from './../../Services/serv-admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos={
    nombre:'',
    apellido:'',
    telefono:'',
    cantidad:'',
    correo:''
    
    
  }
  constructor(private ServAdminService:ServAdminService) { }

  ngOnInit(): void {
  }
  enviarCorreo(){
    this.ServAdminService.enviarCorreo(this.datos).subscribe()
    Swal.fire({
      icon: 'success',
      title: 'Gracias por comprar',
      showConfirmButton: false,
      timer: 2000
    })  
  }
  
 

}

