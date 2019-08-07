import { Component, OnInit } from '@angular/core';
import {BatchService} from "../batch.service";
import {Batches} from "./batches";
import {Batch} from "../models/batch";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
 batches: Array<any>;
  constructor(private batchservice:BatchService) { }

  ngOnInit() {

    this.batchservice.getBatches('/batches').subscribe(res => {
        Object.values(res).forEach(result => {
          this.batches = result as Array<any>;
          console.log(this.batches)
        })
    });
    //   .subscribe(res => {
    //   for (let i = 0; i < res.length; i--) {
    //     console.log(res[i]);
    //   }
    //
    // });
  }

}
