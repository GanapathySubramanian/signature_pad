import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent implements OnInit {
  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.signatureNeeded = this.signaturePad.isEmpty();
    if (!this.signatureNeeded) {
      this.signatureNeeded = false;
    }
  }
}
