import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CycleService } from 'src/app/services/cycle.service';
import { NiveauService } from 'src/app/services/niveau.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-add-niveau',
  templateUrl: './add-niveau.component.html',
  styleUrls: ['./add-niveau.component.css']
})
export class AddNiveauComponent implements OnInit {

  public selectedCycle : any
  public cycleCur : any
  public cycles : any
  public selectedSerie : any
  public serieCur : any
  public series : any
  constructor(private formBuilder:FormBuilder,
    private apiService: NiveauService, private cycleService : CycleService,
    private serieService: SerieService, private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['', [Validators.required]],
      cycle:[''],
      serie : ['', [Validators.required]],
    });
    this.getCycles()

  }

  getCycles(){
    this.cycleService.getAll()
    .subscribe((data: any)=>{
    this.cycles=data;

  }, err=>{
    console.log(err);
  })

  }

  getCycleCur(){
    this.cycleService.getById(this.selectedCycle)
    .subscribe((data: any)=>{
    this.cycleCur=data;

  }, err=>{
    console.log(err);
  })
 }

 getSeries(){
  this.serieService.getByCycle(this.selectedCycle)
  .subscribe((data: any)=>{
  this.series=data;

}, err=>{
  console.log(err);
})

}

getSerieCur(){
  this.serieService.getById(this.selectedSerie)
  .subscribe((data: any)=>{
  this.serieCur=data;

}, err=>{
  console.log(err);
})
}


  onSubmit(){
    console.log(this.form.value);
    this.form.value.serie=this.serieCur
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Niveau : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['niveaux']);
      },err=>{
        alert("Ce libelle de niveau existe deja !");
      });

}

}





