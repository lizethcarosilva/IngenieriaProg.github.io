import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent {
  videoId = 'TU_VIDEO_ID_DE_YOUTUBE'; // Reemplaza con tu ID de video
  safeVideoUrl: SafeResourceUrl;

constructor(private sanitizer: DomSanitizer) {
  this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/kBIMk54grUg`
  );
}

  companyInfo = {
    name: 'IngenieriaProg',
    description: 'Somos una empresa de desarrollo de software dedicada a desarrollar programas y soluciones innovadoras, eficientes y personalizadas que impulsen la transformación digital de empresas y emprendedores, consolidando nuestra presencia en América Latina mediante un servicio de alta calidad, basado en la innovación, el compromiso, la transparencia, el trabajo en equipo y el aprendizaje continuo.',
    legalStructure: 'Sociedad por Acciones Simplificada (SAS)',
    legalAdvantages: [
      'Facilita el crecimiento, ya que permite emitir acciones e incluir nuevos inversionistas',
      'No exige junta directiva ni revisor fiscal, salvo que se superen ciertos ingresos establecidos por la ley',
      'Ampliamente aceptada en el ecosistema emprendedor, lo cual mejora nuestra imagen frente a aliados',
      'Permite operar con una estructura profesional sin necesidad de procesos jurídicos complejos'
    ],
    mission: 'Desarrollar soluciones de software innovadoras, eficientes y personalizadas que potencien la transformación digital de empresas y emprendedores, aportando valor con tecnología de vanguardia, compromiso ético y excelencia operativa.',
    vision: 'Para el año 2030, ser reconocidos en América Latina como una empresa líder en desarrollo de software a medida, destacándonos por la calidad de nuestros productos, la cercanía con nuestros clientes y nuestra capacidad de adaptación a un entorno tecnológico en constante cambio.',
    values: [
      {
        name: 'Innovación',
        description: 'Pensamos de forma creativa y utilizamos nuevas tecnologías para ofrecer soluciones útiles, diferentes y a la medida de nuestros clientes.'
      },
      {
        name: 'Compromiso',
        description: 'Nos tomamos en serio las necesidades de nuestros clientes y trabajamos con dedicación para lograr su satisfacción.'
      },
      {
        name: 'Transparencia',
        description: 'Actuamos con honestidad y claridad en todas las etapas de nuestros proyectos, generando confianza en cada relación.'
      },
      {
        name: 'Trabajo en equipo',
        description: 'Valoramos la colaboración, el respeto y la buena comunicación como pilares para alcanzar resultados efectivos.'
      },
      {
        name: 'Aprendizaje continuo',
        description: 'Promovemos la mejora constante, el crecimiento personal y profesional, y la actualización permanente en un entorno tecnológico en evolución.'
      }
    ],
    foda: {
      fortalezas: [
        'Equipo multidisciplinario altamente capacitado (desarrolladores y diseñadores UX/UI)',
        'Capacidad de adaptabilidad tecnológica para incorporar nuevas herramientas',
        'Ambiente de trabajo basado en innovación, transparencia y trabajo en equipo',
        'Valores y compromiso con la satisfacción del cliente'
      ],
      oportunidades: [
        'Crecimiento sostenido en demanda de soluciones digitales para PyMEs',
        'Avances tecnológicos que permiten productos más innovadores (IA, plataformas multiplataforma)',
        'Programas de formación tecnológica que facilitan acceso a talento joven',
        'Fondos y beneficios fiscales para empresas de base tecnológica'
      ],
      debilidades: [
        'Falta de experiencia en proyectos internacionales',
        'Dependencia de herramientas externas y necesidad de formación continua',
        'Riesgo de centrarse demasiado en la personalización (compromisos poco sostenibles)',
        'Diferentes ritmos de aprendizaje en el equipo'
      ],
      amenazas: [
        'Alta competencia en el mercado de soluciones similares',
        'Cambios en normativas y regulaciones que exijan modificaciones en productos',
        'Calidad variable del talento disponible en el mercado',
        'Velocidad de obsolescencia tecnológica'
      ]
    }
  };
}
