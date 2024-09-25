import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {

  public donnee : any;
  private url : string='';

  constructor(private formBuilder:FormBuilder ,private apiService: SerieService,
    private router:ActivatedRoute,
    private  route: Router) { }
    form : FormGroup= new FormGroup({});





 ngOnInit(): void {
  this.form=this.formBuilder.group({
    libelle : ['', [Validators.required, Validators.pattern("([a-zA-Z]).{1,}")]],
    ref : ['', [Validators.pattern("([a-zA-Z]).{0,}")]],
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
     alert(" Serie  "+this.form.value.libelle+"  modifiee avec succes ");
     this.route.navigate(['series']);
     }, err=>{
       console.log(err);
       alert("Ce libéllé de serie  existe deja !");
     });

 }

}


