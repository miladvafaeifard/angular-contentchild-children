import {
  Component,
  ContentChildren,
  ContentChild,
  QueryList
} from "@angular/core";
import { BookDirDirective } from "./bookdir.directive";

@Component({
  selector: "writer",
  template: `
        Name: {{writerName}}
	<br/>
  <div *ngFor="let book of allBooks">
    Latest Book: {{book?.bookId}} - {{book?.bookName}}
  </div>
  `
})
export class WriterComponent {
  @ContentChild(BookDirDirective) Book: BookDirDirective;
  @ContentChildren(BookDirDirective, { descendants: true })
  allBooks: QueryList<BookDirDirective>;
  writerName = "Mahesh";
}
