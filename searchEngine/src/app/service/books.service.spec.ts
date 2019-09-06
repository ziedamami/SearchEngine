import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('BooksService', () => {
  let service :BooksService
  let search:string
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
  ],
  providers: [BooksService]

  }));
  beforeEach(() => {
    service = TestBed.get(BooksService);
});
  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
  it('#GetAllBooks should return value from observable',
  (done: DoneFn) => {
  service.GetAllBooks(search).subscribe(value => {
    expect(value).toBe('observable value');
    done();
  });
});
});
