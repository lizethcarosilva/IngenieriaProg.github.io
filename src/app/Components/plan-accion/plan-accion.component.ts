import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plan-accion',
  templateUrl: './plan-accion.component.html',
     imports: [CommonModule, RouterModule],
  styleUrls: ['./plan-accion.component.scss']
})
export class PlanAccionComponent {
  actionPlan = {
    objective: 'Implementar SeguriApp en tres ciudades piloto con una base inicial de 5.000 usuarios activos y al menos dos alianzas institucionales estratégicas en el primer año.',
    actions: [
      {
        action: 'Desarrollo del MVP y conectividad GPS',
        responsible: 'CTO / Desarrolladores',
        deadline: 'Mes 1-2',
        resources: '$20 M COP en tecnología'
      },
      {
        action: 'Contratación de equipo GPS (niños, mascotas, vehículos)',
        responsible: 'CTO / Compras',
        deadline: 'Mes 2',
        resources: 'Desarrollo de recursos GPS (Colombia)'
      },
      {
        action: 'Campaña de lanzamiento comunitario',
        responsible: 'Marketing',
        deadline: 'Mes 3',
        resources: '$10 M COP'
      },
      {
        action: 'Formación de redes locales (capacitación JAC, colegios)',
        responsible: 'Coordinador local',
        deadline: 'Mes 4-6',
        resources: '$10 M COP'
      },
      {
        action: 'Evaluación y mejoras continuas',
        responsible: 'Equipo técnico',
        deadline: 'Mensual',
        resources: '-'
      }
    ],
    timeline: [
      {
        phase: 'Desarrollo inicial',
        months: 'Mes 1-2',
        tasks: 'MVP + prueba con 10 GPS'
      },
      {
        phase: 'Pruebas piloto',
        months: 'Mes 3',
        tasks: 'Difusión + feedback'
      },
      {
        phase: 'Implementación',
        months: 'Mes 4-6',
        tasks: '50 dispositivos + alianzas'
      },
      {
        phase: 'Evaluación y expansión',
        months: 'Mes 7-12',
        tasks: 'Ajustes + crecimiento'
      }
    ],
    budget: {
      initial: '$28.650 M COP',
      monthly: '$1.650 M COP/mes',
      details: [
        'Equipo GPS: $1.50.000 COP inicial',
        'Mensualidades GPS: $55.000 COP/mes',
        'Desarrollo tecnológico: $7 M COP',
        'Marketing: $20 M COP'
      ]
    }
  };
}
