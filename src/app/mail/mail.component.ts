import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  disabled = true;
  values = '';
  dataToSend = {
    title: 'Test front',
    body: '<email_utilisateur>',
    userId: 1 
  } 

  onKey(event : any) { // without type info
    console.log(event.target)
    this.disabled = event.target.value.length == 0
  }
  constructor(private snackBar: MatSnackBar,private apiService: ApiService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.apiService.post(this.dataToSend).subscribe((success)=>{
      this.snackBar.open('votre email à été bien envoyé','Undo',{
        duration: 2000,
      });
    },(error)=>{
      this.snackBar.open("Une erruer est survenu lors de l'envoi de l'email",'Undo',{
        duration: 2000,
      });
    }
    )
  }
}
