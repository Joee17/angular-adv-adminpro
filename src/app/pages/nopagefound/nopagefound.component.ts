import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.CSS']
})
export class NopagefoundComponent  {

  year = new  Date().getFullYear();
}
