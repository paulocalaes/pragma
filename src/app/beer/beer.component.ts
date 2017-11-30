import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
 
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
	@Input() container: Beer;

  constructor() {  }

  ngOnInit() {
  }

  analyzeTemperature(){
    if (this.container.nowTemperature==-1000){
      return 'warning';
    } else	if (this.container.nowTemperature <= this.container.maxTemperature 
  		&& this.container.nowTemperature >= this.container.minTemperature ){
  		return 'success';
  	} else if (this.container.nowTemperature > this.container.maxTemperature) {
  		return 'danger';
  	} else {
  		return 'primary';
  	}
  }
  analyzeTemperatureIcon(){
  	if (this.container.nowTemperature==-1000){
      return 'remove';
    } else if (this.container.nowTemperature <= this.container.maxTemperature 
  		&& this.container.nowTemperature >= this.container.minTemperature ){
  		return 'ok';
  	} else if (this.container.nowTemperature > this.container.maxTemperature) {
  		return 'fire';
  	} else {
  		return 'asterisk';
  	}
  }
  analyzeTemperatureAudio(){
  	if (this.container.nowTemperature <= this.container.maxTemperature 
  		&& this.container.nowTemperature >= this.container.minTemperature ){
  		return false;
  	} else {
  		return true;
  	}
  }
}
