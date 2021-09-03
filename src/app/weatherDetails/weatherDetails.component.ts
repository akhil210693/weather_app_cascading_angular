import {Component, Input, OnInit} from '@angular/core';
import { WeatherdataService } from './weatherdata.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss'],
  providers: [WeatherdataService]
})

export class WeatherDetails implements OnInit {
  getdata: any[];
  city: string = "";
  enteredData: any[];
  invaliddata: boolean;
  constructor(public weatherData: WeatherdataService) { }


  ngOnInit(): void {
    this.getdata = this.weatherData.getdata();


  }
  public validatedata() {
    if (this.city) {
      for (var i = 0; i <= this.getdata.length; i++) {
        if (((this.getdata[i].name).toUpperCase()) == ((this.city).toUpperCase())) {
          this.enteredData = this.getdata[i];
          console.log(this.enteredData);
          this.invaliddata = false;
          break;
        }
        else {
          this.invaliddata = true;
        }
      }
    }
    else {
      alert("Please enter a City Name");

    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}