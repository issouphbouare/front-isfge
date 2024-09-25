import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: SerieService,
    private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['', [Validators.required, Validators.pattern("([a-zA-Z]).{1,}")]],
      ref : ['', [Validators.pattern("([a-zA-Z]).{0,}")]],

    });

  }

  onSubmit(){
    console.log(this.form.value);
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Serie : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['series']);
      },err=>{
        alert("Ce libelle de serie existe deja !");
      });

}

}




