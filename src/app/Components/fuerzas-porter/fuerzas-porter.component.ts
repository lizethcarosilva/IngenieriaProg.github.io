import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fuerzas-porter',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fuerzas-porter.component.html',
  styleUrls: ['./fuerzas-porter.component.scss']
})
export class FuerzasPorterComponent {
  conclusionText = 'SeguriApp surge como una respuesta tecnológica, social y preventiva ante la creciente sensación de inseguridad en Colombia. Su ventaja está en unir en una sola app la seguridad personal, el rastreo GPS y la fuerza de la comunidad digital. A diferencia de apps existentes, no se enfoca solo en un tipo de usuario o situación, sino en la vida cotidiana de miles de colombianos que hoy buscan sentirse más seguros y conectados.';

  porterForces = [
    {
      title: '1. Rivalidad entre competidores',
      content: 'La competencia en el mercado de aplicaciones de seguridad es moderada. Existen soluciones conocidas como Life360, SOSAFE o aplicaciones municipales, pero ninguna integra completamente la conexión entre vecinos, autoridades locales y alertas barriales.',
      icon: 'groups',
      strength: 'Moderada',
      factors: [
        'Life360 tiene enfoque familiar (no comunitario)',
        'Aplicaciones municipales carecen de integración',
        'Ninguna competencia ofrece solución integral'
      ]
    },
    {
      title: '2. Poder de negociación de los clientes',
      content: 'Los usuarios tienen opciones gratuitas disponibles, pero SeguriApp combina funcionalidades esenciales sin costo con opciones premium accesibles.',
      icon: 'handshake',
      strength: 'Moderada',
      factors: [
        'Modelo freemium atractivo',
        'Valor emocional de la seguridad',
        'Sentido de pertenencia comunitaria'
      ]
    },
    {
      title: '3. Poder de negociación de los proveedores',
      content: 'Se utilizan tecnologías estándar con alternativas disponibles, lo que mantiene bajo control los costos y riesgos tecnológicos.',
      icon: 'inventory',
      strength: 'Baja',
      factors: [
        'Tecnologías ampliamente disponibles',
        'Alternativas open-source existentes',
        'Costos predecibles'
      ]
    },
    {
      title: '4. Amenaza de nuevos entrantes',
      content: 'La tecnología es accesible, pero la verdadera barrera es la confianza comunitaria y las alianzas locales establecidas por SeguriApp.',
      icon: 'new_releases',
      strength: 'Baja',
      factors: [
        'Red de usuarios establecida',
        'Alianzas con autoridades locales',
        'Confianza comunitaria difícil de replicar'
      ]
    },
    {
      title: '5. Amenaza de productos sustitutos',
      content: 'Plataformas como WhatsApp se usan para alertas, pero carecen de funcionalidades específicas para seguridad estructurada.',
      icon: 'swap_horiz',
      strength: 'Alta',
      factors: [
        'Uso extendido de WhatsApp para seguridad',
        'Falta de geolocalización precisa',
        'Ausencia de historial de incidentes'
      ]
    }
  ];

  comparisonFeatures = [
    {
      name: 'Conexión comunitaria',
      life360: 'No',
      sosafe: 'Parcial',
      whatsapp: 'No estructurada'
    },
    {
      name: 'Integración con autoridades',
      life360: 'No',
      sosafe: 'Sí',
      whatsapp: 'No'
    },
    {
      name: 'Geolocalización precisa',
      life360: 'Sí',
      sosafe: 'Sí',
      whatsapp: 'No'
    },
    {
      name: 'Alertas barriales',
      life360: 'No',
      sosafe: 'Parcial',
      whatsapp: 'Manual'
    },
    {
      name: 'Historial de incidentes',
      life360: 'Limitado',
      sosafe: 'Sí',
      whatsapp: 'No'
    },
    {
      name: 'Enfoque en Colombia',
      life360: 'No',
      sosafe: 'No',
      whatsapp: 'No'
    }
  ];
}