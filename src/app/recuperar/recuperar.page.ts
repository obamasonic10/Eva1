import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(
    private activatedRouter : ActivatedRoute,
    private router          : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
  }
//metodos

async recuperar()
{
    const alertElement = await this.alertController.create({ 
      header  : "Solicitud Ingresada",
      message : "Su nombre de usuario y nueva contraseña han sido enviadas al correo registrado",
      buttons : [
        {text  : "Volver al inicio",
        handler: () => {
          this.router.navigateByUrl("/inicio");
        }}]
    })
    await alertElement.present();
  }
}
