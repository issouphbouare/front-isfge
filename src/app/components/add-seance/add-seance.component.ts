import { ClasseService } from './../../services/classe.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {

  public donnee:any;
  public classes: any;
  public classe: any;
  public selectedClasse : any
  public enseignant: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  minTime: string = '06:00';
  maxTime: string = '19:00';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: SeanceService, private formBuilder:FormBuilder ,
    private router : Router, private enseignantService: EnseignantService,
    private classeService: ClasseService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      matiere : ['',[Validators.required]],
      heureDebut : ['',[Validators.required, heureDansPlageValidator('06:00', '19:00')]],
      nombreHeure : ['',[Validators.required]],
      enseignant : [''],
      classe : ['',[Validators.required]],

    });
    this.url=this.route.snapshot.params['id']
    this.getEnseignantCur();
    this.getClasses();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.enseignant=this.enseignant;
    this.form.value.classe=this.classe
    this.apiService.Create(this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Seance   ajoutée avec succes ");
      this.router.navigate(['seances']);
      }, err=>{
        alert("Une séance à la même heure existe déjà pour cette classe ou cet personnel")
        console.log(err);

      });

  }

  getEnseignantCur(){
    this.enseignantService.getById(this.url)
    .subscribe((data: any)=>{
    this.enseignant=data;
    console.log(this.enseignant);
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
  this.classeService.getById(this.selectedClasse)
  .subscribe((data: any)=>{
  this.classe=data;

}, err=>{
  console.log(err);
})
}


}

export function heureDansPlageValidator(min: string, max: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const heure = control.value;

    if (!heure) {
      return null; // Ne pas valider si aucune heure n'est sélectionnée
    }

    // Comparer avec les valeurs min et max
    return (heure >= min && heure <= max) ? null : { heureInvalid: true };
  };
}




