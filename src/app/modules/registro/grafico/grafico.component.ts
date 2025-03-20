// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ChartConfiguration, ChartType } from 'chart.js';
// import { RegistroService } from 'src/app/core/services/registro.service';


// @Component({
//   selector: 'app-grafico',
//   templateUrl: './grafico.component.html',
//   styleUrls: ['./grafico.component.scss']
// })
// export class GraficoComponent {
//   formGroup!: FormGroup;

//   public barChartType: ChartType = 'bar';
//   public barChartData: ChartConfiguration<'bar'>['data'] = {
//     labels: [],
//     datasets: [
//       { data: [], label: 'Distribuição de Dados', backgroundColor: 'rgba(54, 162, 235, 0.6)' }
//     ]
//   };

//   // Opções do gráfico de barras
//   public barChartOptions: ChartConfiguration<'bar'>['options'] = {
//     responsive: true,
//     scales: {
//       x: {}, // Configuração do eixo X
//       y: { beginAtZero: true } // Eixo Y iniciando em zero
//     }
//   };
//   constructor(
//     private registroService: RegistroService,
//     private formBuilder: FormBuilder,
//   ) { }

//   ngOnInit(): void {
//     // this.carregarDados();
//     this.loadForm();
//   }

//   private loadForm(): void {
//     this.formGroup = this.formBuilder.group({
//       data: this.formBuilder.group({
//         inicio: [],
//         fim: [],
//       })
//     });
//   }

//   public carregarDados(): void {
//     // this.registroService.all().subscribe((dados) => {
//     const inicio = this.formGroup.get('data.inicio')?.value;
//     const fim = this.formGroup.get('data.fim')?.value;

//     if (inicio && fim) {
//       this.registroService.relatorio(inicio, fim).subscribe(
//         (dados) => {
//           const labels: string[] = [];
//           const data: number[] = [];


//           // Itera sobre os registros retornados pela API
//           dados.forEach((registro: any) => {
//             // Adiciona os valores de "abordagem" que não são zero
//             Object.entries(registro.abordagem).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key)); // Formata a label
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "ocorrencia" que não são zero
//             Object.entries(registro.ocorrencia).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "presosApreensoes" que não são zero
//             Object.entries(registro.presosApreensoes).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "drogas" que não são zero
//             Object.entries(registro.drogas).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "transito" que não são zero
//             Object.entries(registro.transito).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "rondas" que não são zero
//             Object.entries(registro.rondas).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "operacao" que não são zero
//             Object.entries(registro.operacao).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });

//             // Adiciona os valores de "documentos" que não são zero
//             Object.entries(registro.documentos).forEach(([key, value]) => {
//               if (typeof value === 'number' && value > 0) {
//                 labels.push(this.formatarLabel(key));
//                 data.push(value as number);
//               }
//             });
//           });

//           // Atualiza os dados do gráfico
//           this.barChartData.labels = labels;
//           this.barChartData.datasets[0].data = data;
//         });
//     }
//   }

//   // Método para formatar as labels (opcional)
//   private formatarLabel(key: string): string {
//     return key
//       .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes de letras maiúsculas
//       .replace(/^./, (str) => str.toUpperCase()); // Capitaliza a primeira letra
//   }



// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartType } from 'chart.js';
import { RegistroService } from 'src/app/core/services/registro.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent {
  formGroup!: FormGroup;

  // Alterado para gráfico de barras
  public barChartType: ChartType = 'bar';

  // Configuração dos dados para o gráfico de barras
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Distribuição de Dados', backgroundColor: 'rgba(54, 162, 235, 0.6)' }
    ]
  };

  // Opções do gráfico de barras
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {}, // Configuração do eixo X
      y: { beginAtZero: true } // Eixo Y iniciando em zero
    }
  };

  constructor(
    private registroService: RegistroService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  private loadForm(): void {
    this.formGroup = this.formBuilder.group({
      data: this.formBuilder.group({
        inicio: [],
        fim: [],
      })
    });
  }

  public carregarDados(): void {
    const inicio = this.formGroup.get('data.inicio')?.value;
    const fim = this.formGroup.get('data.fim')?.value;

    if (inicio && fim) {
      this.registroService.relatorio(inicio, fim).subscribe(
        (dados) => {
          const labels: string[] = [];
          const data: number[] = [];

          // Itera sobre os registros retornados pela API
          dados.forEach((registro: any) => {
            // Adiciona valores que não são zero de diferentes categorias
            ['abordagem', 'ocorrencia', 'presosApreensoes', 'drogas', 'transito', 'rondas', 'operacao', 'documentos']
              .forEach((categoria) => {
                if (registro[categoria]) {
                  Object.entries(registro[categoria]).forEach(([key, value]) => {
                    if (typeof value === 'number' && value > 0) {
                      labels.push(this.formatarLabel(key));
                      data.push(value as number);
                    }
                  });
                }
              });
          });

          // Atualiza os dados do gráfico
          this.barChartData.labels = labels;
          this.barChartData.datasets[0].data = data;
        });
    }
  }

  // Método para formatar as labels (opcional)
  private formatarLabel(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes de letras maiúsculas
      .replace(/^./, (str) => str.toUpperCase()); // Capitaliza a primeira letra
  }
}

