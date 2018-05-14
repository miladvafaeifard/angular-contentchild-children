import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  showAllBook = false;
  onShowAllBooks() {
    this.showAllBook = this.showAllBook === true ? false : true;
  }
}
