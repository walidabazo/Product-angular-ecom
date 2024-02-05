import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderRequestCount: number = 0;
  constructor(private spinnerservices: NgxSpinnerService) { }
  load() {
    this.loaderRequestCount++;
    this.spinnerservices.show(undefined,
      {
        bdColor: "rgba(215,208,208,0.8)",
        size: "medium",
        color: "#c32d2d",
        type: 'ball-atom',

      }
    );

  }
  hidingloader() {
    this.loaderRequestCount--;
    if (this.loaderRequestCount <= 0) {
      this.loaderRequestCount = 0;
      this.spinnerservices.hide();
    }
  }
}
