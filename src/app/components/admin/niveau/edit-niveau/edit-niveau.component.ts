import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NiveauService } from 'src/app/services/niveau.service';

@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.css']
})
export class EditNiveauComponent implements OnInit {

  public donnee : any;
  private url : string='';

  constructor(private formBuilder:FormBuilder ,private apiService: NiveauService,
    private router:ActivatedRoute,
    private  route: Router) { }
    form : FormGroup= new FormGroup({});





 ngOnInit(): void {
  this.form=this.formBuilder.group({
    libelle : ['', [Validators.required]],
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
     alert(" Niveau  "+this.form.value.libelle+"  modifiee avec succes ");
     this.route.navigate(['niveaux']);
     }, err=>{
       console.log(err);
       alert("Ce libéllé de niveau  existe deja !");
     });

 }

}



