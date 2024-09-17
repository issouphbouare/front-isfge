import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeService } from 'src/app/services/annee.service';
@Component({
  selector: 'app-edit-annee',
  templateUrl: './edit-annee.component.html',
  styleUrls: ['./edit-annee.component.css']
})
export class EditAnneeComponent implements OnInit {

  public donnee : any;
  private url : string='';

  constructor(private formBuilder:FormBuilder ,private apiService: AnneeService,
    private router:ActivatedRoute,
    private  route: Router) { }
    form : FormGroup= new FormGroup({});





 ngOnInit(): void {
  this.form=this.formBuilder.group({
    libelle : ['',[Validators.required, Validators.pattern("([0-9]).{1,}")]],
     });
  this.url=this.router.snapshot.params['id']
  this.apiService.getById(this.url).
      subscribe(data=>{
                    this.donnee=data;
                    console.log(this.donnee);
      }, err=>{
          console.log(err);
         }
  );


 }
 onSubmit(){
   console.log(this.form.value);
   console.log(this.url);
   this.apiService.Update(this.url, this.form.value).
   subscribe( (data: any) => {
     console.log(data);
     alert(" Année scolaire  "+this.form.value.libelle+"  modifiee avec succes ");
     this.route.navigate(['regions']);
     }, err=>{
       console.log(err);
       alert("Ce libéllé d'année scolaire existe deja !");
     });

 }

}

