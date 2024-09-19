import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent  implements OnInit {

  public donnee:any;
  public annee: any;
  public regions: any;

  public url: string='';
  form : FormGroup= new FormGroup({});

  cycles: string[] = [
    'Préscolaire', '1er Cycle', '2e Cycle'];
  niveaux: string[] = [
    '00', '01', '02', '03', '04', '05',
    '06', '07', '08', '09'];

  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: ClasseService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      cycle : ['',[Validators.required, ]],
      niveau : ['',[Validators.required]],
      anneeScolaire : [''],
      nom : [''],
    });
    this.url=this.route.snapshot.params['id']
    this.getClasseCur();

  }

  getClasseCur(){
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
      alert(" Classe  "+this.form.value.nom+"  modifiee avec succes ");
      this.router.navigate(['classes']);
      }, err=>{
        console.log(err);
        alert("Cette classe existe deja !");
      });

  }



}





