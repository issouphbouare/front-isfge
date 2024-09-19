import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnneeService } from 'src/app/services/annee.service';
import { DepenseService } from 'src/app/services/depense.service';

@Component({
  selector: 'app-edit-depense',
  templateUrl: './edit-depense.component.html',
  styleUrls: ['./edit-depense.component.css']
})
export class EditDepenseComponent implements OnInit {

  public donnee:any;
  public annee: any;
  public regions: any;

  public url: string='';
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: DepenseService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      libelle : ['',[Validators.required, ]],
      montant : ['',[ Validators.pattern('^[0-9]*$'),]],
      anneeScolaire : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getDepenseCur();

  }

  getDepenseCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{

    this.donnee=data;

  }, err=>{
    console.log(err);
  })

  }









  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.donnee.anneeScolaire;
    this.apiService.Update(this.donnee.id, this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Depense  "+this.form.value.libelle+"  modifiée avec succes ");
      this.router.navigate(['depenses']);
      }, err=>{
        console.log(err);
        alert("Cette classe existe deja !");
      });

  }



}






