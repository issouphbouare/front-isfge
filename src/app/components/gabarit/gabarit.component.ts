import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-gabarit',
  templateUrl: './gabarit.component.html',
  styleUrls: ['./gabarit.component.css']
})
export class GabaritComponent {
  
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();}

}
