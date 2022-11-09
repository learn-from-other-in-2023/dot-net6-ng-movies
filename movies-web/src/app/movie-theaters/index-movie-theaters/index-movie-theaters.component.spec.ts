import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMovieTheatersComponent } from './index-movie-theaters.component';

describe('IndexMovieTheatersComponent', () => {
  let component: IndexMovieTheatersComponent;
  let fixture: ComponentFixture<IndexMovieTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMovieTheatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMovieTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
