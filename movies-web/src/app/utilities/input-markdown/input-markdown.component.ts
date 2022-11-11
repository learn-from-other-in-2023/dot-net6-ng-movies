import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  markdownContent = '';

  @Output()
  changeMarkdownEvent = new EventEmitter<string | any>();

  constructor() { }

  ngOnInit(): void {
  }

}
