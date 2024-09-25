import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {

  public donnee : any;
  private url : string='';

  constructor(private formBuilder:FormBuilder ,private apiService: MatiereService,
    private router:ActivatedRoute,
    private  route: Router) { }
    form : FormGroup= new FormGroup({});





 ngOnInit(): void {
  this.form=this.formBuilder.group({
    libelle : ['', [Validators.required, Validators.pattern("([a-zA-Z]).{1,}")]],
    ref : ['', [Validators.pattern("([a-zA-Z]).{1,}")]],
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
     alert(" Matiere  "+this.form.value.libelle+"  modifiee avec succes ");
     this.route.navigate(['matieres']);
     }, err=>{
       console.log(err);
       alert("Ce libéllé de matiere  existe deja !");
     });

 }

}

