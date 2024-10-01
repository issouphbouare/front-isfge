import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnneeService } from 'src/app/services/annee.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  public donnee:any;
  public region: any;
  public annee: any;
  public nbPage : number=0;
  public pages : Array<number>=[];
  public url: string='';
  public isVacataire!: boolean;
  public isPer!: boolean;
  public isVisibleVac: string="hidden"
  public isVisiblePer: string="hidden"
  form : FormGroup= new FormGroup({});



  constructor(private http: HttpClient,private route:ActivatedRoute,
    private apiService: EnseignantService, private formBuilder:FormBuilder ,
    private router : Router, private anneeService: AnneeService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      genre : ['',[Validators.required]],
      telephone: ['', [Validators.required, Validators.pattern('^[5-9][0-9]{7}$'),]],
      typeEnseignant : ['',[Validators.required]],
      tauxHoraire : ['',[Validators.pattern('^[0-9]*$'),]],
      tauxForfaitaire : ['',[ Validators.pattern('^[0-9]*$'),]],
      anneeScolaire : [''],

    });
    this.url=this.route.snapshot.params['id']
    this.getAnneeCur();

  }








  onSubmit(){
    console.log(this.form.value);
    console.log(this.url);
    this.form.value.anneeScolaire=this.annee;
    this.apiService.Create(this.form.value).
    subscribe( (data: any) => {
      console.log(data);
      alert(" Personnel  "+data.nom+"  ajoutée avec succes ");
      this.router.navigate(['enseignants']);
      }, err=>{
        console.log(err);
        alert("Il existe deja un personnel avec le meme numero de telephone !");
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

  selectedGenre: string = '';
  optionsG: { value: string, label: string }[] = [
    { value: '', label: '' },
    { value: 'Femme', label: 'Femme' },
    { value: 'Homme', label: 'Homme' }

  ];
  onSelectionGenre() {

  }

  selectedType: string = '';
  optionsTypes: { value: string, label: string }[] = [
    { value: '', label: '' },
    { value: 'Vacataire', label: 'Vacataire' },
    { value: 'Permanent_9/12', label: 'Permanent_9/12' },
    { value: 'Permanent_10/12', label: 'Permanent_10/12' },
    { value: 'Permanent_12/12', label: 'Permanent_12/12' }

  ];
  onSelectionType() {
       if(this.selectedType==='Vacataire'){
        this.isVisibleVac="tel"; this.isVacataire=true;
        this.isVisiblePer="hidden"; this.isPer=false;
       }
       if(this.selectedType!=='Vacataire'){
        this.isVisiblePer="tel"; this.isVacataire=false;
         this.isVisibleVac="hidden"; this.isPer=true
       }
  }
}







