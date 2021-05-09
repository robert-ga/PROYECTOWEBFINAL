import { Admin, ServAdminService } from './../../Services/serv-admin.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //importamos para las rutas

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListarAdmin:Admin[]=[];
  constructor(private ServAdminService:ServAdminService, private router:Router) { }

  ngOnInit(): void {
    this.listarAdmins()
  }
  listarAdmins(){
    this.ServAdminService.getAdmins().subscribe(
      res=>{
        console.log(res)
        this.ListarAdmin=<any>res
      },
      err=>console.log(err)
    );
  }
  eliminar(id:string){
    this.ServAdminService.deleteAdmin(id).subscribe(
      res=>{
        console.log("admin eliminado")
        this.listarAdmins()
      },
      err=>{
        console.log(err)
      }
    )
  }
  modificar(id:string){
    this.router.navigate(['/edit/'+id])
  }
}

