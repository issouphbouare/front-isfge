import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { RemunerationService } from 'src/app/services/remuneration.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-remuneration',
  templateUrl: './add-remuneration.component.html',
  styleUrls: ['./add-remuneration.component.css']
})
export class AddRemunerationComponent implements OnInit {

  public donnee:any;
  public username: any;
  public userCur: any;
  public enseignant: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});
  mois: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private tokenStorageService: TokenStorageService, private userService: UserService,
    private apiService: RemunerationService, private formBuilder:FormBuilder ,
    private router : Router, private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({

      mois : ['',[Validators.required]],
      montant : ['',[ Validators.pattern('^[0-9]*$'),]],
      enseignant : [''],
      user : [''],

    });
    this.url=this.route.snapshot.params['id']
    const user = this.tokenStorageService.getUser();
    this.username=user.username;
    this.getUserCur();
    this.getEnseignantCur();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.enseignant=this.enseignant;
    this.form.value.user=this.userCur;
    this.apiService.Create(this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Remuneration de l'enseignant de code  "+this.enseignant.code+"  effectué avec succes ");
      this.router.navigate(['remunerations']);
      }, err=>{
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
 getUserCur(){
  this.userService.getByUsername(this.username)
  .subscribe((data: any)=>{
  this.userCur=data;
  console.log(this.userCur);
}, err=>{
  console.log(err);
})
}

}



