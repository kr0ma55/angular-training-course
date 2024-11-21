import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit, OnChanges {



  @Input() totalItems: number = 0;
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>()
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  @Output() previous: EventEmitter<number> = new EventEmitter<number>()
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>()
  pageSize: number = 10;
  pageCount!: number;
  pagesList!: number[];
  currentPage: number = 1;


  //INDICI
  endIndex: number = 1;
  startIndex: number = 1;
  endIndexForEntries: number = 1;
  startIndexForEntries: number = 1;

  ngOnInit(): void {
    this.updateIndexesOfEntries();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] && changes['totalItems'].currentValue !== changes['totalItems'].previousValue) {
      this.pageCount = Math.ceil(this.totalItems / this.pageSize);
      this.pagesList = [...Array(this.pageCount).keys()].map(x => ++x);
    }
  }

  onNextPage() {
    if (!(this.currentPage >= this.pageCount)) {
      this.startIndex = this.currentPage * this.pageSize;
      this.endIndex = ++this.currentPage * this.pageSize;
      this.updateIndexesOfEntries();
      this.changePage.emit({
        startIndex: this.startIndex,
        endIndex: this.endIndex

      });
    }
  }


  onPreviousPage() {
    if (this.currentPage !== 1) {
      this.endIndex = (this.currentPage * this.pageSize) - this.pageSize;
      this.startIndex = this.endIndex - this.pageSize;
      --this.currentPage;
      this.updateIndexesOfEntries();
      this.changePage.emit({
        endIndex: this.endIndex,
        startIndex: this.startIndex
      });
    }
  }

  updateIndexesOfEntries() {
    this.endIndexForEntries = (this.totalItems / this.pageSize) * this.currentPage;
    this.startIndexForEntries = this.endIndexForEntries - this.pageSize;
    this.startIndexForEntries = this.startIndexForEntries === 0 ? this.startIndexForEntries + 1 : this.startIndexForEntries;
  }
}
