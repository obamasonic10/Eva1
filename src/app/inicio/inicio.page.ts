import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
// atributos
  nombre : string;
  clave : number;

  constructor(
    private activatedRouter : ActivatedRoute,
    private router          : Router,
    private alertController : AlertController
  ) { 

  }
    
  ngOnInit() {
  }

// metodos
async ingresar(nom: HTMLInputElement, cla: HTMLInputElement)
  {
  let no = String(nom.value)
  let cl = Number(cla.value)
  if (nom.value == "vi.verdugob" && cla.value == "1234"){
    const alertElement = await this.alertController.create({ 
      header  : "Usuario Reconocido",
      message : "Bienvenido Victor Verdugo Buzeta",
      buttons : [
        {text  : "OK",
        handler: () => {
          this.router.navigateByUrl("/menu");
        }}]
    })
    await alertElement.present();
  }}
      
}
