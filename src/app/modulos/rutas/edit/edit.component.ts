import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoModelo } from 'src/app/modelos/aeropuerto.model';
import { RutaModelo } from 'src/app/modelos/ruta.model';
import { AeropuertosService } from 'src/app/servicios/aeropuertos.service';
import { RutasService } from 'src/app/servicios/rutas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listadoAeropuertos: AeropuertoModelo[] = []
  constructor(
    private fb: FormBuilder,
    private rutaService: RutasService,
    private router: Router,
    private aeropuertoService: AeropuertosService,
    private route: ActivatedRoute
  ) { }

  getAllAeropuertos(){
    this.aeropuertoService.getAll().subscribe((data: AeropuertoModelo[]) => {
      this.listadoAeropuertos = data
      console.log(data)
    })
  }

  fgValidacion = this.fb.group({
    id: ['', [Validators.required]],
    origen: ['', [Validators.required]],
    destino: ['', [Validators.required]],
    tiempo_estimado: ['', [Validators.required]],
  });
  
  id: string=''

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
    this.getAllAeropuertos()
  }

  buscarRegistro(id: string){
    this.rutaService.getWithId(id).subscribe((data: RutaModelo) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id)
      this.fgValidacion.controls["origen"].setValue(data.origen)
      this.fgValidacion.controls["destino"].setValue(data.destino)
      this.fgValidacion.controls["tiempo_estimado"].setValue(data.tiempo_estimado)
    })
  }

  edit(){
    let ruta = new RutaModelo();
    ruta.id = this.fgValidacion.controls["id"].value;
    ruta.origen = this.fgValidacion.controls["origen"].value;
    ruta.destino = this.fgValidacion.controls["destino"].value;
    ruta.tiempo_estimado = this.fgValidacion.controls["tiempo_estimado"].value;

    this.rutaService.update(ruta).subscribe((data: RutaModelo)=> {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/rutas/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }
}
