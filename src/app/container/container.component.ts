import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { CONTAINERS } from '../mock-containers';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

	containers: Beer[] = CONTAINERS;


  constructor(private service:TemperatureService) {
      setInterval(()=>{
          let temperatures = service.getTemperatures();
          let flag;
          for(let j in this.containers){
              flag = 0;
              for(let i in temperatures){
                  if(this.containers[j].id == temperatures[i].id){
                      this.containers[j].nowTemperature = temperatures[i].temperature;
                      flag = 1;
                      break;
                  }
              }
              if(!flag){
                this.containers[j].nowTemperature = -1000;
              }
          }
      },3000);
  }

  ngOnInit() {
  }

}
