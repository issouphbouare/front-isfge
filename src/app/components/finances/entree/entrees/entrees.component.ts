import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeService } from 'src/app/services/annee.service';
import { EntreeService } from 'src/app/services/entree.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent {
  public donnees: any;
  public av=1;
  keyword: string = '';
  annee: string = '';
  sort: string = '';
  direction: string = '';
  urlDownload: string='';
  idAv: number =0;
  totalSearch:number=0;
  montants:number=0;
  public currentPage: number=0;
    public size : number=6;
    public nbPage : number=0;
    public pages : Array<number>=[];


  constructor(private http: HttpClient,private anneeService: AnneeService,
    private apiService: EntreeService
    ,
    private router : Router) { }


  ngOnInit(): void {
    this.av=1;
    this.onSearch()
    this.getAnneeCur();
  }
  getAnneeCur(){
    this.anneeService.getAnneeCur()
    .subscribe((data: any)=>{
    this.annee=data.libelle;

    console.log(this.annee);
  }, err=>{
    console.log(err);
  })

  }

  goToPage(i:any){
    this.currentPage=i;
    this.onSearch();
  }
  goToPrevious(){
    this.currentPage=this.currentPage-1;
    this.onSearch();
  }
  goToNext(){
    this.currentPage=this.currentPage+1;
    this.onSearch();
  }
  search(){
    this.currentPage=0;
    this.onSearch();
  }
  onDelete(a: any){
    if(confirm("Voulez-vous vraiment supprimer cette Entrée ?")){
      console.log();
      this.apiService.delete(a)
      .subscribe( data=>{
        this.onSearch();
        window.location.reload();

        }, err=>{
          console.log(err);
        }
      );

    //alert("Militant  supprimé avec succes");
  }

  }

  onSearch() {
    this.apiService.search(this.annee, this.keyword, this.currentPage, this.size, this.sort, this.direction)
      .subscribe((data: any) => { // Utilisez un type générique 'any' pour 'data'
        this.nbPage = data.totalPages;
        this.totalSearch=data.totalElements;
        this.pages = new Array<number>(this.nbPage);
        this.donnees = data.content;
        console.log(this.donnees)
        this.getMontant()
      }, err => {
        console.log(err);
      });
  }
  vider(){
    this.keyword='';
  }

  sortData(column: string) {
    // Inverser la direction du tri si l'utilisateur clique sur la même colonne

      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      this.sort=column;
      this.onSearch();
    }
  getMontant(){
    this.montants=0;
    this.donnees.forEach((e :any) => {
      this.montants+=e.montant
    });
  }
  }


