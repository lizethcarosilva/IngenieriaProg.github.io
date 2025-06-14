import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
   standalone: true,
})
export class InicioComponent {
  teamMembers = [
    {
      name: 'Lizeth Andrea Caro Silva',
      code: '085450372022',
      position: 'Desarrolladora Front-End',
      image: 'images/FOTOLIZETHGRIS.jpg',
      bio: 'Especialista en Angular y diseño de interfaces de usuario'
    },
    {
      name: 'Josue Daniel Mejia Carvajal',
      code: '085450122022',
      position: 'Desarrollador Back-End',
      image: 'images/josue.jpg',
      bio: 'Experto en Node.js, APIs y arquitectura de software'
    },
    {
      name: 'Carlos Stiven Villada Quiceno',
      code: '085451042022',
      position: 'Diseñador UX/UI',
      image: 'images/carlos.jpg',
      bio: 'Diseñador de experiencias digitales centradas en el usuario'
    },
    {
      name: 'Daniel Alejandro Yate Hernandez',
      code: '085450452023',
      position: 'Gerente de Proyecto',
      image: 'images/daniel.jpg',
      bio: 'Gestión ágil de proyectos y estrategias de desarrollo'
    }
  ];

  universityInfo = {
    photo: 'images/hazel.jpeg',
    teacher: 'Docente: Hazel Paola Flórez Mena',
    institution: 'SECRETARIA ACADÉMICA - UNIVERSIDAD DEL TOLIMA',
    program: 'INGENIERÍA DE SISTEMAS - PROCESOS ADMINISTRATIVOS',
    location: 'IBAGUÉ - TOLIMA - 2025'
  };

  contactInfo = {
    email: 'contacto@ingenieriaprog.com',
    phone: '+57 314 398 9394',
    address: 'Calle 16a #6-60, Ibagué, Tolima'
  };
}
