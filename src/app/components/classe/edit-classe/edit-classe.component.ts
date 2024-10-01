import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { SerieService } from 'src/app/services/serie.service';
import { CycleService } from 'src/app/services/cycle.service';
import { NiveauService } from 'src/app/services/niveau.service';
@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent  implements OnInit {

  public donnee:any;
  public annee: any;
  public cycles : any
  public series: any;
  public niveaux : any
  public niveauCur: any;

  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: ClasseService, private formBuilder:FormBuilder ,
    private cycleService: CycleService, private niveauService: NiveauService,
    private router : Router, private anneeService: AnneeService, private serieService : SerieService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      cycle : ['',[Validators.required, ]],
      niveau : ['',[Validators.required]],
      anneeScolaire : [''],
      nom : [''],
      serie : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getClasseCur();
    this.getCycles()
  }

  getClasseCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{
    this.donnee=data
    this.getSeries()
  }, err=>{
    console.log(err);
  })
  }

  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.donnee.anneeScolaire;
    this.form.value.niveau=this.niveauCur;
    this.apiService.Update(this.donnee.id, this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Classe  "+data.nom+"  modifiee avec succes ");
      this.router.navigate(['classes']);
      }, err=>{
        console.log(err);
        alert("Cette classe existe deja !");
      });

  }
  getCycles(){
    this.cycleService.getAll()
    .subscribe((data: any)=>{
    this.cycles=data;
    console.log(this.annee);
  }, err=>{
    console.log(err);
  })
  }

  getSeries(){
    this.serieService.getByCycle(this.donnee.niveau.serie.cycle.id)
    .subscribe((data: any)=>{
    this.series=data;
    this.getNiveaux()
    console.log(this.annee);
  }, err=>{
    console.log(err);
  })
  }

  getNiveaux(){
    this.niveauService.getBySerie(this.donnee.niveau.serie.id)
    .subscribe((data: any)=>{
    this.niveaux=data;
    console.log(this.annee);
  }, err=>{
    console.log(err);
  })
  }
  getNiveauCur(){
    this.niveauService.getById(this.donnee.niveau.id)
    .subscribe((data: any)=>{
    this.niveauCur=data;
    console.log(this.niveauCur);
  }, err=>{
    console.log(err);
  })
  }


}





