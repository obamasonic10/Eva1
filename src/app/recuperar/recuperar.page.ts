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
  correo: string;

  constructor(
    private activatedRouter : ActivatedRoute,
    private router          : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
  }
//metodos

async recuperar(cor: HTMLInputElement)
{
  let co = String(cor.value)
  if (cor.value == "victor.ve@gmail.com"){
    const alertElement = await this.alertController.create({ 
      header  : "Solicitud Ingresada",
      message : "Su contraseña ha sido enviada al correo registrado",
      buttons : [
        {text  : "Volver al inicio",
        handler: () => {
          this.router.navigateByUrl("/inicio");
        }}]
    })
    await alertElement.present();
  }
  else{
    const alertElement = await this.alertController.create({ 
    header  : "ERROR",
    message : "El correo ingresado no es válido",
    buttons : [
      {text  : "Intentelo nuevamente",
      handler: () => {
        this.router.navigateByUrl("/recuperar");
      }}]
  })
  await alertElement.present();
}}

}
