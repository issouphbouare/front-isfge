import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-edit-cycle',
  templateUrl: './edit-cycle.component.html',
  styleUrls: ['./edit-cycle.component.css']
})
export class EditCycleComponent implements OnInit {

  public donnee : any;
  private url : string='';

  constructor(private formBuilder:FormBuilder ,private apiService: CycleService,
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
     alert(" Cycle  "+this.form.value.libelle+"  modifié avec succes ");
     this.route.navigate(['cycles']);
     }, err=>{
       console.log(err);
       alert("Ce libéllé de cycle  existe deja !");
     });

 }

}


