import { Component } from '@angular/core';
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent  extends InputComponent{

  ngOnInit() {
    this.type = 'search';
  }

}
