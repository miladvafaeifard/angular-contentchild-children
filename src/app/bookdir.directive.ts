import { Directive, Input } from "@angular/core";

@Directive({
  selector: "bookdir"
})
export class BookDirDirective {
  @Input() bookId: string;
  @Input() bookName: string;
}
