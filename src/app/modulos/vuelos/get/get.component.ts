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
import { VueloModelo } from 'src/app/modelos/vuelo.model';
import { VuelosService } from 'src/app/servicios/vuelos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private vuelosService: VuelosService) { }

  listado: VueloModelo[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.vuelosService.getAll().subscribe((data: VueloModelo[]) => {
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
        this.vuelosService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }
}
