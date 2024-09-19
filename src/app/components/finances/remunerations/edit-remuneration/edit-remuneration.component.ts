import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { RemunerationService } from 'src/app/services/remuneration.service';

@Component({
  selector: 'app-edit-remuneration',
  templateUrl: './edit-remuneration.component.html',
  styleUrls: ['./edit-remuneration.component.css']
})
export class EditRemunerationComponent implements OnInit {

  public donnee:any;
  public region: any;
  public ensegnant: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});
  mois: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];


  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: RemunerationService, private formBuilder:FormBuilder ,
    private router : Router, private enseignamtService: EnseignantService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      mois : ['',[Validators.required]],
      montant : ['',[ Validators.pattern('^[0-9]*$'),]],


    });
    this.url=this.route.snapshot.params['id']
    this.getRemunerationCur();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    //this.form.value.eleve=this.eleve;
    this.apiService.Update(this.donnee.id, this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Rémunération du personnel de code  "+this.donnee.enseignant.code+"  modifié avec succes ");
      this.router.navigate(['remunerations']);
      }, err=>{
        console.log(err);

      });

  }

  getRemunerationCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{
    this.donnee=data;

  }, err=>{
    console.log(err);
  })
 }


}


