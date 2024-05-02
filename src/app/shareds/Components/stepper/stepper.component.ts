import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper implements OnInit {

  @Input() linearModeSelected: boolean;

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  Onclick(index:number)
  {
    this.selectedIndex = index;
    console.log(this.selectedIndex);
  }

}
