import { ClasseService } from './../../services/classe.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-edit-seance',
  templateUrl: './edit-seance.component.html',
  styleUrls: ['./edit-seance.component.css']
})
export class EditSeanceComponent implements OnInit {

  public donnee:any;
  public classes: any;
  public classe: any;
  public selectedClasse : any
  public enseignant: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: SeanceService, private formBuilder:FormBuilder ,
    private router : Router, private enseignantService: EnseignantService,
    private classeService: ClasseService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      matiere : ['',[Validators.required]],
      horaire : ['',[Validators.required]],
      nombreHeure : ['',[Validators.required]],
      classe : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getSeanceCur();
    this.getClasses();
    this.getClasse()
  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    //this.form.value.enseignant=this.enseignant;
    this.form.value.classe=this.classe
    this.apiService.Update(this.donnee.id ,this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Seance   modifiée avec succes ");
      this.router.navigate(['seances']);
      }, err=>{
        console.log(err);

      });

  }

  getSeanceCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{
    this.donnee=data;
    console.log(this.donnee);


  }, err=>{
    console.log(err);
  })
 }



 getClasses(){
  this.classeService.getAll()
  .subscribe((data: any)=>{
  this.classes=data;
  console.log(this.classes);
}, err=>{
  console.log(err);
})
}

getClasse(){
  this.classeService.getById(this.donnee.classe.id)
  .subscribe((data: any)=>{
  this.classe=data;

}, err=>{
  console.log(err);
})
}


}





