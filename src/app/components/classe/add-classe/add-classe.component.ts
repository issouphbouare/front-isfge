import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { SerieService } from 'src/app/services/serie.service';
@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  public series:any;
  public selectedSerie: any;
  public serie: any;
  public annee: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});
  cycles: string[] = [
    'Préscolaire', '1er Cycle', '2e Cycle', 'Secondaire','Licence', 'Master', 'Doctorat'];
  niveaux: string[] = [
    '00', '01', '02', '03', '04', '05',
    '06', '07', '08', '09','10', '11', '12'];


  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: ClasseService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService,
  private serieService : SerieService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      cycle : ['',[Validators.required]],
      niveau : ['',[Validators.required]],
      anneeScolaire : [''],
      serie : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getAnneeCur();
    this.getSeries()

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.annee;
    this.form.value.serie=this.serie;
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

 getSeries(){
  this.serieService.getAll()
  .subscribe((data: any)=>{
  this.series=data;
  console.log(this.annee);
}, err=>{
  console.log(err);
})
}
getSerieCur(){
  this.serieService.getById(this.selectedSerie)
  .subscribe((data: any)=>{
  this.serie=data;
  console.log(this.annee);
}, err=>{
  console.log(err);
})
}


}






