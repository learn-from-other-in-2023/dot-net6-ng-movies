import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { SecurityService } from '~/app/security/security.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;

  @Input()
  selectedRate = 0;

  @Output()
  onRatingEvent: EventEmitter<number> = new EventEmitter<number>();

  previousRate = 0;

  maxRatingArr: any[] = [];

  constructor(private securityService: SecurityService) {
  }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    if (this.securityService.isAuthenticated()) {
      this.selectedRate = index + 1;
      this.previousRate = this.selectedRate;
      this.onRatingEvent.emit(this.selectedRate);
    } else {
      Swal.fire("Information", "You need to log in before voting", "info");
    }
  }

}
