import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBandComponent } from './message-band.component';

describe('MessageBandComponent', () => {
  let component: MessageBandComponent;
  let fixture: ComponentFixture<MessageBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
