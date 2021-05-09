import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin, ServAdminService } from './../../Services/serv-admin.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  admin: Admin={
    id:'',
    nombre:'',
    apellido:'',
    nombreus:'',
    correo:'',
    password:''
  };
  constructor(private ServAdminService:ServAdminService, private router:Router, private activeRoute:ActivatedRoute) { }
  ngOnInit(): void {
    const id_e=<string>this.activeRoute.snapshot.params.id;//recuperamo id de app-routing.modules
    console.log('id de entrada: '+id_e)
    if(id_e){
      this.ServAdminService.getAdmin(id_e).subscribe(
        res=>{
          let valores=JSON.stringify(res)
          //ERROR CORREGIDO
          let cadead=JSON.parse(valores)
          this.admin.id=cadead[0].id
          this.admin.nombre=cadead[0].nombre
          this.admin.apellido=cadead[0].apellido
          this.admin.nombreus=cadead[0].nombreus
          this.admin.correo=cadead[0].correo
          this.admin.password=cadead[0].password
        },
        err=>console.log(err)
      );
    } 
  }
  modificar(){
    this.ServAdminService.editAdmin(this.admin.id, this.admin).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);

  }

}
