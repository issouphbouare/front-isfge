import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.css']
})
export class AddCycleComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: CycleService,
    private  router:Router) { }
    form : FormGroup= new FormGroup({});


  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['', [Validators.required]],

    });

  }

  onSubmit(){
    console.log(this.form.value);
    this.apiService.Create(this.form.value).
    subscribe( data => {
        alert("Cycle : "+this.form.value.libelle+
        "  ajoutée avec succes  !");
        this.router.navigate(['cycles']);
      },err=>{
        alert("Ce libelle de cycle existe deja !");
      });

}

}


