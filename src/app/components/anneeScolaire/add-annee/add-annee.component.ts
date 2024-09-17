import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnneeService } from 'src/app/services/annee.service';
@Component({
  selector: 'app-add-annee',
  templateUrl: './add-annee.component.html',
  styleUrls: ['./add-annee.component.css']
})
export class AddAnneeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: AnneeService,
    private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['',[Validators.required, Validators.pattern("([0-9]).{1,}")]],

    });

  }

  onSubmit(){
    console.log(this.form.value);
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Annee Scolaire : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['annees']);
      },err=>{
        alert("Ce libelle d'année existe deja !");
      });

}

}


