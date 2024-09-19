import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepenseService } from 'src/app/services/depense.service';
import { AnneeService } from 'src/app/services/annee.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.css']
})
export class AddDepenseComponent implements OnInit {

  public donnee:any;
  public username: any;
  public userCur: any;
  public annee: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private tokenStorageService: TokenStorageService, private userService: UserService
    ,private apiService: DepenseService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['',[Validators.required]],
      montant : ['',[ Validators.pattern('^[0-9]*$'),]],
      anneeScolaire : [''],
      user : [''],

    });
    this.url=this.route.snapshot.params['id']
    const user = this.tokenStorageService.getUser();
    this.username=user.username;
    this.getUserCur();
    this.getAnneeCur();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.annee;
    this.form.value.user=this.userCur;
    this.apiService.Create(this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Depense  "+data.libelle+"  ajoutée avec succes ");
      this.router.navigate(['depenses']);
      }, err=>{
        console.log(err);
        //alert("Cette classe existe deja !");
      });

  }

  getAnneeCur(){
    this.anneeService.getAnneeCur()
    .subscribe((data: any)=>{
    this.annee=data;
    console.log(this.annee);
  }, err=>{
    console.log(err);
  })
 }

 getUserCur(){
  this.userService.getByUsername(this.username)
  .subscribe((data: any)=>{
  this.userCur=data;
  console.log(this.userCur);
}, err=>{
  console.log(err);
})
}


}






