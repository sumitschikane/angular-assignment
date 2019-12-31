import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { DataService } from "../data.service";
import { isNull } from "util";

@Component({
  selector: "app-addconcept",
  templateUrl: "./addconcept.component.html",
  styleUrls: ["./addconcept.component.css"]
})
export class AddconceptComponent implements OnInit {
  addNewForm: FormGroup;
  submitted = false;
  success: any = false;

  constructor(
    private fromBuilder: FormBuilder,
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    let params;
    this.activatedRoute.queryParams.subscribe(data => {
      params = data;
    });

    this.addNewForm = this.fromBuilder.group({
      conceptid: [params.concept_id, Validators.required],
      conceptname: [params.concept_name, Validators.required],
      concepttype: [params.concept_type, Validators.required],
      periodtype: [params.period_type, Validators.required],
      id: [params.id]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addNewForm.invalid) {
      return;
    }
    if (isNull(this.addNewForm.controls.id.value)) {
      let postData = {
        id: this.addNewForm.controls.conceptid.value,
        name: this.addNewForm.controls.conceptname.value,
        type: this.addNewForm.controls.concepttype.value,
        period: this.addNewForm.controls.periodtype.value
      };
      this.data.addNewConcept(postData).subscribe(labeldata => {
        this.success = labeldata;
      });
    } else {
      let postData = {
        id: this.addNewForm.controls.id.value,
        conceptid: this.addNewForm.controls.conceptid.value,
        name: this.addNewForm.controls.conceptname.value,
        type: this.addNewForm.controls.concepttype.value,
        period: this.addNewForm.controls.periodtype.value
      };
      this.data.editConcept(postData).subscribe(labeldata => {
        this.success = labeldata;
      });
    }
  }

  ngOnInit() {}
}
