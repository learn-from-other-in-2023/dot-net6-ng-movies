import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from 'src/app/utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.scss']
})
export class LifecycletestComponent implements OnInit, OnDestroy, DoCheck
  , OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  userName: string | undefined = '';

  @ViewChild(RatingComponent)
  rating: RatingComponent | undefined;

  timer: ReturnType<typeof setInterval> | undefined;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit. Rating Component: ', this.rating);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges ...`, changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    clearInterval(this.timer);
  }

  ngOnInit(): void {
    console.log('ngOnInit. Rating Component: ', this.rating);

    this.timer = setInterval(() => console.log(new Date()), 1000);
  }

  handleRating(rate: number) {
    console.log(rate);
  }
}
