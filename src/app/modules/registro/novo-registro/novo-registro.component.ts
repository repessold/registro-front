import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/core/services/registro.service';
import { ViaturasService } from 'src/app/core/services/viaturas.service';
import { SnackbarService } from 'src/assets/shared/snackbar.service';

@Component({
  selector: 'app-novo-registro',
  templateUrl: './novo-registro.component.html',
  styleUrls: ['./novo-registro.component.scss']
})
export class NovoRegistroComponent implements OnInit {
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
  viaturas: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private registroService: RegistroService,
    private snackbar: SnackbarService,
    private viaturasService: ViaturasService
  ) { }

  ngOnInit() {
    this.carregarViaturas();
    this.formGroup = this.formBuilder.group({});

    this.firstFormGroup = this.formBuilder.group({
      viatura: [null, Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      pessoasSemCriminal: [undefined, Validators.pattern('^[0-9]*$')],
      pessoasComCriminal: [undefined, Validators.pattern('^[0-9]*$')],
      motos: [undefined, Validators.pattern('^[0-9]*$')],
      carros: [undefined, Validators.pattern('^[0-9]*$')],
      onibus: [undefined, Validators.pattern('^[0-9]*$')],
      taxis: [undefined, Validators.pattern('^[0-9]*$')],
    });

    this.thirdFormGroup = this.formBuilder.group({
      flagrantes: [undefined, Validators.pattern('^[0-9]*$')],
      flagrantesDeRoubo: [undefined, Validators.pattern('^[0-9]*$')],
      ocorrenciasAtendidas: [undefined, Validators.pattern('^[0-9]*$')],
      contravencoes: [undefined, Validators.pattern('^[0-9]*$')],
      atoInfracionalRoubo: [undefined, Validators.pattern('^[0-9]*$')],
      atoInfracional: [undefined, Validators.pattern('^[0-9]*$')],
    });

    this.fourthFormGroup = this.formBuilder.group({
      presosEmFlagrante: [undefined, Validators.pattern('^[0-9]*$')],
      sindicados: [undefined, Validators.pattern('^[0-9]*$')],
      recapturados: [undefined, Validators.pattern('^[0-9]*$')],
      armas: [undefined, Validators.pattern('^[0-9]*$')],
      drogas: [undefined, Validators.pattern('^[0-9]*$')],
      autoLocalizado: [undefined, Validators.pattern('^[0-9]*$')],
    });

    this.fifthFormGroup = this.formBuilder.group({
      // maconhaKg: [undefined, Validators.pattern('^[0-9]*$')],
      // cocainaKg: [undefined, Validators.pattern('^[0-9]*$')],
      // crackKg: [undefined, Validators.pattern('^[0-9]*$')],
      // totalKg: [undefined, Validators.pattern('^[0-9]*$')],

      maconhaKg: [''],
      cocainaKg: [''],
      crackKg: [''],
      totalKg: [''],
    });

    this.sixthFormGroup = this.formBuilder.group({
      carroAprendido: [undefined, Validators.pattern('^[0-9]*$')],
      motoAprendido: [undefined, Validators.pattern('^[0-9]*$')],
      ait: [undefined, Validators.pattern('^[0-9]*$')], // Auto de Infração de Trânsito
      ai: [undefined, Validators.pattern('^[0-9]*$')],  // Acidente com Vítima
      crr: [undefined, Validators.pattern('^[0-9]*$')], // Carga/Reboque/Recolhimento
    });

    this.seventhFormGroup = this.formBuilder.group({
      bancarias: [undefined, Validators.pattern('^[0-9]*$')],
      comerciais: [undefined, Validators.pattern('^[0-9]*$')],
      escolar: [undefined, Validators.pattern('^[0-9]*$')],
    });

    this.eighthFormGroup = this.formBuilder.group({
      visibilidade: [undefined, Validators.pattern('^[0-9]*$')],
      bloqueio: [undefined, Validators.pattern('^[0-9]*$')],
    });

    this.ninthFormGroup = this.formBuilder.group({
      bopm: [undefined, Validators.pattern('^[0-9]*$')], // Boletim de Ocorrência PM
      bopc: [undefined, Validators.pattern('^[0-9]*$')], // Boletim de Ocorrência PC
      raiia: [undefined, Validators.pattern('^[0-9]*$')], // Registro de Ações Integradas
      partes: [undefined, Validators.pattern('^[0-9]*$')], // Partes envolvidas
    });
  }

  carregarViaturas() {
    this.viaturasService.getViaturas().subscribe(data => {
      this.viaturas = data;
    })
  }

  onSubmit() {
    const dataForm = {
      ...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.thirdFormGroup.value,
      ...this.fourthFormGroup.value, ...this.fifthFormGroup.value, ...this.sixthFormGroup.value,
      ...this.seventhFormGroup.value, ...this.eighthFormGroup.value, ...this.ninthFormGroup.value
    }

    this.registroService.newRegistry(dataForm).subscribe(() => {
      this.snackbar.showCreate();
      //snackBar shows message
    })
  }
}
