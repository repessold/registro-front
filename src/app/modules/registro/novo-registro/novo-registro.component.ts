import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-novo-registro',
  templateUrl: './novo-registro.component.html',
  styleUrls: ['./novo-registro.component.scss']
})
export class NovoRegistroComponent {
  formGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;
  eighthFormGroup!: FormGroup;
  ninthFormGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFirstFormGroup();
  }


  onSubmit() { }



  private initFirstFormGroup() {
    this.firstFormGroup = this.formBuilder.group({


    })
    // Abordagem
    this.secondFormGroup = this.formBuilder.group({
      pessoasSemCriminal: [undefined],
      pessoasComCriminal: [undefined],
      motos: [undefined],
      carros: [undefined],
      onibus: [undefined],
      taxis: [undefined],
    })
    // Ocorrência
    this.thirdFormGroup = this.formBuilder.group({
      flagrantes: [undefined],
      flagrantesDeRoubo: [undefined],
      ocorrenciasAtendidas: [undefined],
      contravencoes: [undefined],
      atoInfracionalRoubo: [undefined],
      atoInfracional: [undefined],
    })
    // Presos e apreensões
    this.fourthFormGroup = this.formBuilder.group({
      presosEmFlagrante: [undefined],
      sindicados: [undefined],
      recapturados: [undefined],
      armas: [undefined],
      drogas: [undefined],
      autoLocalizado: [undefined],
    })
    // Drogas
    this.fifthFormGroup = this.formBuilder.group({
      maconhaKg: [undefined],
      cocainaKg: [undefined],
      crackKg: [undefined],
      totalKg: [undefined],
    })
    // Transito
    this.sixthFormGroup = this.formBuilder.group({
      carroAprendido: [undefined],
      motoAprendido: [undefined],
      ait: [undefined], // Auto de Infração de Trânsito
      ai: [undefined],  // Acidente com Vítima
      crr: [undefined], // Carga/Reboque/Recolhimento
    })
    // Rondas
    this.seventhFormGroup = this.formBuilder.group({
      bancarias: [undefined],
      comerciais: [undefined],
      escolar: [undefined],
    })
    // Operação
    this.eighthFormGroup = this.formBuilder.group({
      visibilidade: [undefined],
      bloqueio: [undefined],

    })

    this.ninthFormGroup = this.formBuilder.group({
      bopm: [undefined], // Boletim de Ocorrência PM
      bopc: [undefined], // Boletim de Ocorrência PC
      raiia: [undefined], // Registro de Ações Integradas
      partes: [undefined],// Partes envolvidas
    })










  }


}
