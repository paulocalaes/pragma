import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureService {

  constructor() { }

  	getTemperatures() {
	  return [ 
	  	{ id:1, temperature: this.getRandomArbitrary(-7, -2)},
	  	{ id:2, temperature: this.getRandomArbitrary(-7, -2)},
	  	{ id:3, temperature: this.getRandomArbitrary(-7, -2)},
	  	{ id:4, temperature: this.getRandomArbitrary(-7, -2)},
	  	{ id:5, temperature: this.getRandomArbitrary(-7, -2)},
	  	{ id:6, temperature: this.getRandomArbitrary(-7, -2)}
	  ];
	}

	getRandomArbitrary(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}
}
