import { Component} from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = "";
  greenClass = "green";
  redClass = "red";

  onInput(text: string) {
    this.enteredText = text;

  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return "pending";
    }
    return enteredLetter === randomLetter ? "correct" : "incorrect";
  }

}
