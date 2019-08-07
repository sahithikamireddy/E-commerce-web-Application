import { Component, OnInit } from '@angular/core';
import {BatchService} from "../batch.service";
import {StrainService} from "../strain.service";

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.scss']
})
export class StrainComponent implements OnInit {
  strains: Array<any>;
  constructor(private strainservice: StrainService) {
  }

  ngOnInit() {

    this.strainservice.getStrains('/strains').subscribe(res => {
      Object.values(res).forEach(result => {
        this.strains = result as Array<any>;
        console.log(this.strains)
      })
    });
  }
}
