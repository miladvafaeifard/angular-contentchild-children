import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BookDirDirective } from "./bookdir.directive";
import { WriterComponent } from "./write.component";

@NgModule({
  declarations: [AppComponent, WriterComponent, BookDirDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
