import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  foto: string;
  nombre: string;
  correo: string;
  carrera: string;
  jornada: string;
  sede: string;

  constructor() {
    this.foto = 'data:image/jpeg;base64,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';
    this.nombre = "Víctor Verdugo Buzeta";
    this.correo = "vi.verdugob@duocuc.cl"
    this.carrera = "Analista Programador Computacional";
    this.jornada = "Diurna";
    this.sede = "Plaza Oeste";
  }

  ngOnInit() {
  }

}
