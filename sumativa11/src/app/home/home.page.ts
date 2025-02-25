import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonItem,IonLabel,IonInput,IonCard,IonCardHeader,IonCardContent,IonCardTitle],
})
export class HomePage {
  constructor(private router:Router,private OpenaiService:OpenaiService ) {}

  ideaPrompt:string = '';
  generatedIdea:string = '';

  async generateIdea(){
    if(this.ideaPrompt.trim()==='')
    {
      alert('Por favor ingrese una idea');
      return;
    }
    this.generatedIdea = await this.OpenaiService.generateIdea(this.ideaPrompt);

  }


}
