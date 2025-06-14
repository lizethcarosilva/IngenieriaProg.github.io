import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterModule, MatIconModule],
   standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  constructor(private router: Router) {}

  isMainRoute(): boolean {
    return this.router.url === '/producto' || this.router.url === '/producto/';
  }

  productInfo = {
    name: 'SeguriApp',
    description: 'Aplicación móvil enfocada en la seguridad ciudadana y geolocalización inteligente, diseñada para que cualquier persona pueda monitorear, prevenir y actuar frente a situaciones de riesgo.',
    features: [
      {
        title: 'Geolocalización Inteligente',
        items: [
          'Rastreo en tiempo real con dispositivos GPS',
          'Historial de rutas y ubicaciones',
          'Alertas por salida de zonas seguras',
          'Delimitación de áreas permitidas'
        ]
      },
      {
        title: 'Plataforma de Seguridad Colaborativa',
        items: [
          'Botón de pánico con alerta inmediata',
          'Mapa en tiempo real de incidentes',
          'Sistema de reportes comunitarios',
          'Chat vecinal para coordinación'
        ]
      }
    ],
    context: 'Según informes de medios como El Tiempo, Semana y RCN Noticias, Colombia ha experimentado un incremento en hechos como robos callejeros y a domicilios, desapariciones de personas, hurtos a vehículos y motocicletas, y casos de niños y adultos mayores perdidos sin medios tecnológicos para ser ubicados rápidamente.',
    pricing: [
      {
        userType: 'Niños / Adultos mayores',
        basicPlan: 'Gratis (funciones limitadas)',
        gpsPlan: '$55.000 COP/mes',
        deviceCost: '$150.000 COP'
      },
      {
        userType: 'Mascotas',
        basicPlan: 'Gratis (solo mapa y alertas)',
        gpsPlan: '$55.000 COP/mes',
        deviceCost: '$150.000 COP'
      },
      {
        userType: 'Vehículos',
        basicPlan: 'Gratis (solo comunidad)',
        gpsPlan: '$75.000-90.000 COP/mes',
        deviceCost: '$150.000-200.000 COP'
      }
    ],
    differentiators: {
      localApps: [
        '112 Policía Nacional: Solo contacto de emergencia',
        'NeivApp: Solo reportes locales sin GPS',
        'Life360: Solo para núcleos familiares'
      ],
      internationalApps: [
        'Citizen (EE.UU.): No disponible en LATAM',
        'Find My Kids: Sin botón SOS',
        'Tractive: Solo para mascotas'
      ],
      uniqueFeatures: 'SeguriApp es la única plataforma que integra protección personal con rastreo GPS y comunidad vecinal, ofreciendo una solución completa para personas, mascotas y vehículos en un solo lugar.'
    }
  };
}
