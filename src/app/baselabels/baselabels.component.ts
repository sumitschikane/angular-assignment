import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { isObject } from "util";

@Component({
  selector: "app-baselabels",
  templateUrl: "./baselabels.component.html",
  styleUrls: ["./baselabels.component.css"]
})
export class BaselabelsComponent implements OnInit {
  modalStyle: boolean = false;
  show: boolean = false;
  @Input() labels: any[];

  ngOnChanges(changes: any) {
    if (
      typeof changes.labels.currentValue !== "undefined" &&
      Object.keys(changes.labels.currentValue).length > 0
    ) {
      console.log(Object.keys(changes.labels.currentValue).length);
      this.show = true;
    } else {
      this.show = false;
    }
    if (changes.labels.firstChange == false) {
      this.modalStyle = true;
    }
  }

  onClickClose() {
    this.modalStyle = false;
  }

  constructor() {}

  ngOnInit() {}
}
