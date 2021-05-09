import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //importamos para las rutas
import { Admin, ServAdminService } from './../../Services/serv-admin.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  ListarAdmin:Admin[]=[];
  constructor(private ServAdminService:ServAdminService, private router:Router) { }

  ngOnInit(): void {
    this.listarAdmins()
  }
  listarAdmins(){
    this.ServAdminService.getAdmins().subscribe(
      res=>{
        console.log(res)
        this.ListarAdmin=<any>res;
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
