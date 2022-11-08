import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges() {
    // ... save the genre

    this.router.navigate(['/genres']);

  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
