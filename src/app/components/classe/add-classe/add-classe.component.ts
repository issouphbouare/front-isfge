import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { SerieService } from 'src/app/services/serie.service';
import { NiveauService } from 'src/app/services/niveau.service';
import { CycleService } from 'src/app/services/cycle.service';
@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  public selectedCycle : any
  public cycles : any
  public selectedSerie : any
  public series: any;
  public niveaux : any
  public selectedNiveau : any
  public niveauCur: any;
  public annee: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: ClasseService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService,private cycleService: CycleService,
  private serieService : SerieService, private niveauService: NiveauService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      cycle : ['',[Validators.required]],
      niveau : ['',[Validators.required]],
      anneeScolaire : [''],
      serie : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getAnneeCur();
    this.getCycles()

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.annee;
    this.form.value.niveau=this.niveauCur;
    this.apiService.Create(this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Classe  "+data.nom+"  ajoutée avec succes ");
      this.router.navigate(['classes']);
      }, err=>{
        console.log(err);
        alert("Cette classe existe deja !");
      });

  }

  getAnneeCur(){
    this.anneeService.getAnneeCur()
    .subscribe((data: any)=>{
    this.annee=data;
    console.log(this.annee);
  }, err=>{
    console.log(err);
  })
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
  this.serieService.getByCycle(this.selectedCycle)
  .subscribe((data: any)=>{
  this.series=data;
  console.log(this.annee);
}, err=>{
  console.log(err);
})
}

getNiveaux(){
  this.niveauService.getBySerie(this.selectedSerie)
  .subscribe((data: any)=>{
  this.niveaux=data;
  console.log(this.annee);
}, err=>{
  console.log(err);
})
}
getNiveauCur(){
  this.niveauService.getById(this.selectedNiveau)
  .subscribe((data: any)=>{
  this.niveauCur=data;
  console.log(this.annee);
}, err=>{
  console.log(err);
})
}


}






