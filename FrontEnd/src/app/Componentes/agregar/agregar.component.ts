import { Router } from '@angular/router';
import { Admin, ServAdminService } from './../../Services/serv-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  admin: Admin={
    id:'',
    nombre:'',
    apellido:'',
    nombreus:'',
    correo:'',
    password:''
  }
  constructor(private ServAdminService:ServAdminService, private router:Router) { }

  ngOnInit(): void {
  }
  
  agregar(){
    //delete this.admin.id;
    this.ServAdminService.addAdmin(this.admin).subscribe();
    this.router.navigate(['/inicio'])
  }

}
