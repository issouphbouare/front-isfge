import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: MatiereService,
    private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['', [Validators.required, Validators.pattern("([a-zA-Z]).{1,}")]],
      ref : ['', [Validators.pattern("([a-zA-Z]).{1,}")]],

    });

  }

  onSubmit(){
    console.log(this.form.value);
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Matiere : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['matieres']);
      },err=>{
        alert("Ce libelle de matiere existe deja !");
      });

}

}



