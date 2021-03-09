import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  passwordLength = 0;
  texto: string = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  onChangeLength(event: Event ) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }

  onChangeUseLetters () {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers () {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols () {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&*';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    
    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let gereratedPassword = '';

    for (let i = 0; i < this.passwordLength; i++ ) {
      
      const index = Math.floor(Math.random() * validChars.length);
      
      gereratedPassword += validChars[index];
    }

    this.texto = gereratedPassword;
  }

}
