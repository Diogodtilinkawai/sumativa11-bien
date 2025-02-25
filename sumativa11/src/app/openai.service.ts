import { Injectable } from '@angular/core';
import axios from 'axios';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apikey:string = 'VM6bYVrsBmV34PQ3twvq3NsRZPMsIdLnPiWKmgaM'; 

  constructor() { }
  async generateIdea(prompt:string): Promise<string>{
    const url = 'https://api.openai.com/v1/chat/completions';
    try {
      const response = await axios.post(url, {
        model : 'gpt-3.5-turbo',
        messages: [
          {role: 'system', content: 'Eres un generador de ideas'},
          {role: 'user', content: prompt} 
        ],
        max_tokens: 100,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization':`Bearer. ${this.apikey}`,
          'content-type': 'application/json'
        }
      });
      console.log('Respuesta de openai:',response.data);
      if (response.data && response.data.choices && response.data.choices[0].message )
        {
        return response.data.choices[0].message.content.trim();
      }
      else{
        return 'No se encontró respuesta';
      }
    }  
    catch (error){
      console.error('Error en openai:', error);
      return 'No se encontró respuesta';
    }
  }
}
  
