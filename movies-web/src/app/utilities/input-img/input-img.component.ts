import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fileToBase64 } from '../../common/utilities/utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  imageBase64: string | any;

  @Input()
  urlCurrentImage: string | any;

  @Output()
  onImageSelectedEvent = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  change(event: any) {
    if (event.target.files.length > 0) {
      const imageFile: File = event.target.files[0];

      fileToBase64(imageFile).then((value: string | any) => this.imageBase64 = value);

      this.onImageSelectedEvent.emit(imageFile);

      this.urlCurrentImage = null;
    }
  }

}
