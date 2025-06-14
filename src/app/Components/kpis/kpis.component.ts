import { NgChartsModule } from 'ng2-charts';
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';


interface BaseData {
  [key: string]: string | number;
}

interface UserData extends BaseData {
  month: string;
  users: number;
  total: number;
}

interface AlertData extends BaseData {
  month: string;
  time: string;
  alerts: number;
}

interface SatisfactionData extends BaseData {
  question: string;
  satisfied: number;
  total: number;
}

interface FinancialData extends BaseData {
  month: string;
  value: string;
}

interface Tool {
  name: string;
  description: string;
  image: string;
}

type KpiDataArray = UserData[] | AlertData[] | SatisfactionData[] | FinancialData[];

interface Kpi {
  name: string;
  description: string;
  formula?: string;
  data: KpiDataArray;
  type?: 'users' | 'alerts' | 'satisfaction' | 'financial';
}

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  imports: [CommonModule, RouterModule, NgChartsModule, NgFor],
  styleUrls: ['./kpis.component.scss'],
  standalone: true
})
export class KpisComponent {
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  kpis = {
    financial: [
      {
        name: 'ROI (Retorno sobre la inversión)',
        description: 'Mide qué tanto ganamos en relación con lo que invertimos',
        formula: 'ROI = (Ingresos - Inversión) / Inversión × 100',
        type: 'financial',
        data: [
          { month: 'Mes 1', value: '-36.17%' },
          { month: 'Mes 2', value: '12.35%' },
          { month: 'Mes 3', value: '46.85%' },
          { month: 'Mes 4', value: '50.52%' },
          { month: 'Mes 5', value: '73.5%' },
          { month: 'Mes 6', value: '62.6%' }
        ] as FinancialData[]
      },
      {
        name: 'ARPU (Ingreso promedio por usuario)',
        description: 'Mide cuánto dinero genera en promedio cada usuario al mes',
        formula: 'ARPU = Ingresos totales del mes / Número total de usuarios activos',
        type: 'financial',
        data: [
          { month: 'Mes 1', value: '$223,400' },
          { month: 'Mes 2', value: '$262,167' },
          { month: 'Mes 3', value: '$285,556' },
          { month: 'Mes 4', value: '$313,583' },
          { month: 'Mes 5', value: '$341,267' },
          { month: 'Mes 6', value: '$370,389' }
        ] as FinancialData[]
      },
      {
        name: 'CAC (Costo de adquisición de cliente)',
        description: 'Mide cuánto nos cuesta atraer y convertir un nuevo usuario',
        formula: 'CAC = Gasto en marketing / Usuarios adquiridos',
        type: 'financial',
        data: [
          { month: 'Mes 1', value: '$60,000' },
          { month: 'Mes 2', value: '$33,000' },
          { month: 'Mes 3', value: '$44,000' },
          { month: 'Mes 4', value: '$59,000' },
          { month: 'Mes 5', value: '$47,000' },
          { month: 'Mes 6', value: '$39,000' }
        ] as FinancialData[]
      }
    ],
    operational: [
      {
        name: 'MAU (Usuarios Activos Mensuales)',
        description: 'Número de usuarios únicos que interactúan con la app al menos una vez al mes',
        type: 'users',
        data: [
          { month: 'Mes 1', users: 18, total: 25 },
          { month: 'Mes 2', users: 48, total: 55 },
          { month: 'Mes 3', users: 87, total: 100 },
          { month: 'Mes 4', users: 123, total: 160 },
          { month: 'Mes 5', users: 230, total: 235 },
          { month: 'Mes 6', users: 311, total: 325 }
        ] as UserData[]
      },
      {
        name: 'Tiempo de Respuesta ante Alerta SOS',
        description: 'Tiempo promedio entre activación del botón y respuesta',
        type: 'alerts',
        data: [
          { month: 'Mes 1', time: '40 segundos', alerts: 10 },
          { month: 'Mes 2', time: '45 segundos', alerts: 15 },
          { month: 'Mes 3', time: '48 segundos', alerts: 23 },
          { month: 'Mes 4', time: '49 segundos', alerts: 28 },
          { month: 'Mes 5', time: '51 segundos', alerts: 32 },
          { month: 'Mes 6', time: '53 segundos', alerts: 35 }
        ] as AlertData[]
      },
      {
        name: 'CSAT (Índice de Satisfacción)',
        description: 'Nivel de satisfacción de los usuarios con la app (escala 1-5)',
        type: 'satisfaction',
        data: [
          { question: '¿Te sientes más seguro?', satisfied: 25, total: 25 },
          { question: '¿Facilidad de uso?', satisfied: 22, total: 25 },
          { question: '¿Rastreo GPS cumple expectativas?', satisfied: 22, total: 25 },
          { question: '¿Utilidad botón emergencia?', satisfied: 20, total: 25 },
          { question: '¿Apoyo comunidad?', satisfied: 25, total: 25 }
        ] as SatisfactionData[]
      }
    ],
    tools: [
      {
        name: 'Google Analytics',
        description: 'Monitoreo en tiempo real de usuarios',
        image: 'google-analytics.png'
      },
      {
        name: 'Firebase',
        description: 'Analítica y seguimiento de funcionalidades',
        image: 'firebase.png'
      },
      {
        name: 'Typeform',
        description: 'Encuestas de satisfacción de usuarios',
        image: 'typeform.png'
      },
      {
        name: 'Power BI',
        description: 'Dashboards visuales e informes',
        image: 'power-bi.png'
      }
    ] as Tool[]
  };

  getChartType(kpiType?: string): ChartType {
    switch(kpiType) {
      case 'users': return 'bar';
      case 'alerts': return 'line';
      case 'satisfaction': return 'pie';
      default: return 'line';
    }
  }

  getChartData(data: any, kpiName: string): { labels: string[], datasets: ChartDataset[] } {
    if (this.isFinancialData(data)) {
      return {
        labels: data.map((item: FinancialData) => item.month),
        datasets: [{
          label: kpiName,
          data: data.map((item: FinancialData) => parseFloat(item.value.replace('%', '').replace('$', '').replace(',', ''))),
          borderColor: '#10B981',
          backgroundColor: '#A7F3D0',
          tension: 0.3
        }]
      };
    }

    if (this.isUserData(data)) {
      return {
        labels: data.map((item: UserData) => item.month),
        datasets: [
          {
            label: 'Usuarios Activos',
            data: data.map((item: UserData) => item.users),
            backgroundColor: '#3B82F6'
          },
          {
            label: 'Usuarios Totales',
            data: data.map((item: UserData) => item.total),
            backgroundColor: '#10B981'
          }
        ]
      };
    }

    if (this.isAlertData(data)) {
      return {
        labels: data.map((item: AlertData) => item.month),
        datasets: [{
          label: 'Alertas SOS',
          data: data.map((item: AlertData) => item.alerts),
          borderColor: '#EF4444',
          backgroundColor: '#FECACA',
          tension: 0.3
        }]
      };
    }

    if (this.isSatisfactionData(data)) {
      return {
        labels: data.map((item: SatisfactionData) => item.question),
        datasets: [{
          data: data.map((item: SatisfactionData) => (item.satisfied / item.total) * 100),
          backgroundColor: [
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'
          ]
        }]
      };
    }

    return { labels: [], datasets: [] };
  }

  getDataForTable(data: KpiDataArray): any[] {
    return data as any[];
  }

  // Type guard methods
  isFinancialData(data: any[]): data is FinancialData[] {
    return data.length > 0 && 'value' in data[0];
  }

  isUserData(data: any[]): data is UserData[] {
    return data.length > 0 && 'users' in data[0];
  }

  isAlertData(data: any[]): data is AlertData[] {
    return data.length > 0 && 'time' in data[0];
  }

  isSatisfactionData(data: any[]): data is SatisfactionData[] {
    return data.length > 0 && 'question' in data[0];
  }

  generateChartId(name: string): string {
  return 'chart-' + name.replace(/\s+/g, '-').toLowerCase();
}
}
