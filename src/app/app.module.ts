import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BaseconceptsComponent } from "./baseconcepts/baseconcepts.component";
import { NavComponent } from "./nav/nav.component";
import { BaselabelsComponent } from "./baselabels/baselabels.component";
import { AddconceptComponent } from "./addconcept/addconcept.component";

@NgModule({
  declarations: [
    AppComponent,
    BaseconceptsComponent,
    NavComponent,
    BaselabelsComponent,
    AddconceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
