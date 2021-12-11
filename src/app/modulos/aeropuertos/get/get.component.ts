// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-get',
//   templateUrl: './get.component.html',
//   styleUrls: ['./get.component.css']
// })
// export class GetComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { AeropuertoModelo } from 'src/app/modelos/aeropuerto.model';
import { AeropuertosService } from 'src/app/servicios/aeropuertos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private aeropuertosService: AeropuertosService) { }

  listado: AeropuertoModelo[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.aeropuertosService.getAll().subscribe((data: AeropuertoModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }
 
  delete(id?: any){
    console.log(id)
    Swal.fire({
      title: '¿Está seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.aeropuertosService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }

}