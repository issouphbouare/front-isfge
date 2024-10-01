import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeService } from 'src/app/services/annee.service';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit {

  public donnee:any;
  public annee: any;


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
      typeEnseignant : ['',[Validators.required]],
      tauxHoraire : ['',[Validators.pattern('^[0-9]*$'),]],
      tauxForfaitaire : ['',[ Validators.pattern('^[0-9]*$'),]],
      anneeScolaire : [''],
      telephone: ['', [Validators.required, Validators.pattern('^[5-9][0-9]{7}$'),]],
    });
    this.url=this.route.snapshot.params['id']
    this.getEngCur();

  }

  getEngCur(){
    this.apiService.getById(this.url)
    .subscribe((data: any)=>{

    this.donnee=data;
this.selectedGenre=this.donnee.genre;
this.selectedType=this.donnee.typeEnseignant;
this.onSelectionType()
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
      alert(" Personnel  "+this.form.value.nom+"  modifiee avec succes ");
      this.router.navigate(['enseignants']);
      }, err=>{
        console.log(err);
        alert("Il existe deja un personnel avec le meme numero !");
      });

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







