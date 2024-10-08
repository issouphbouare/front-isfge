import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CycleService } from 'src/app/services/cycle.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  public selectedCycle : any
  public cycleCur : any
  public cycles : any
  constructor(private formBuilder:FormBuilder,
    private apiService: SerieService, private cycleService : CycleService,
    private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['', [Validators.required]],
      ref : ['', [Validators.pattern("([a-zA-Z]).{0,}")]],
      cycle:['']
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


  onSubmit(){
    console.log(this.form.value);
    this.form.value.cycle=this.cycleCur
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Serie : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['series']);
      },err=>{
        alert("Ce libelle de serie existe deja !");
      });

}

}




