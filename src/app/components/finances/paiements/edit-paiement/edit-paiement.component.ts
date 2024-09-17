import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { EleveService } from 'src/app/services/eleve.service';
import { MensualiteService } from 'src/app/services/mensualite.service';

@Component({
  selector: 'app-edit-paiement',
  templateUrl: './edit-paiement.component.html',
  styleUrls: ['./edit-paiement.component.css']
})
export class EditPaiementComponent implements OnInit {

  public donnee:any;
  public region: any;
  public eleve: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: MensualiteService, private formBuilder:FormBuilder ,
    private router : Router, private eleveService: EleveService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      type : ['',[Validators.required]],
      mois : ['',[Validators.required]],
      montant : ['',[Validators.required]],


    });
    this.url=this.route.snapshot.params['id']
    this.getPaiementCur();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    //this.form.value.eleve=this.eleve;
    this.apiService.Update(this.donnee.id, this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Paiement de l'eleve de matricule  "+this.donnee.eleve.matricule+"  modifié avec succes ");
      this.router.navigate(['paiements']);
      }, err=>{
        console.log(err);

      });

  }

  getPaiementCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{
    this.donnee=data;
    console.log(this.eleve);
  }, err=>{
    console.log(err);
  })
 }


}

