import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrafficService {

    private dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd7',
      value: 589,
    },
  ];

  getTrafficData(){
    return [...this.dummyTrafficData];
  }

  getMaxTrafficValue(){
    return Math.max(...this.dummyTrafficData.map(data => data.value));
  }

}