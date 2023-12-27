import {Component, ViewEncapsulation} from '@angular/core';
import moment from "moment/moment";
import momentJalali from 'jalali-moment';

@Component({
  selector: 'app-drop-down-choices',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-choices.component.html',
  styleUrl: './drop-down-choices.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DropDownChoicesComponent {

  dropDown :boolean = false;
  options : string[] = ["Gregorian Date", "تاریخ جلالی"];
  dateNow : string = '';
  jalaliDate : any = momentJalali();

  fontChange : string = '';

  showDropDown() {
    this.dropDown = !this.dropDown;
  }

  onDateSelect(selectedOption:string) {
    if (selectedOption === this.options[0]) {
      this.dateNow = moment().format('MMMM D, YYYY');
      this.fontChange = 'Arial, sans-serif';
    }
    else {
      this.jalaliDate.locale();
      this.dateNow = this.jalaliDate.locale('fa').format('dddd - D MMMM YYYY');
      this.fontChange = 'Tahoma, sans-serif';
    }
  }

}
