import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})


export class TestErrorComponent implements OnInit {
  validationError:any;
  constructor(private http: HttpClient) { }
  basepath: string = environment.baseURL

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get404Error() {
    this.http.get(this.basepath + 'Product/get-product-by-id/1').subscribe({
      next: (next) => console.info(next),
      error: (error) => console.error(error)
    })
  }
  get400Error() {
    this.http.get(this.basepath + 'Bug/Bad-Request').subscribe({
      next: (next) => console.info(next),
      error: (error) => console.error(error)
    })
  }
  get400validationError() {
    this.http.get(this.basepath + 'Bug/Bad-Request').subscribe({
      next: (next) => console.info(next),
      error: (error) => console.error(error)
    })
  }
  get500Error() {
    this.http.get(this.basepath + 'Bug/Server-error').subscribe({
      next: (next) => console.info(next),
      error: (err) => this.validationError = err.errors
    })
  }
}
