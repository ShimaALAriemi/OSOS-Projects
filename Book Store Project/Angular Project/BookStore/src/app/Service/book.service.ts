import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../DataStore/Interface/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7206/api/Book';

  constructor(private http: HttpClient) {
  }

  private bookId!: number;

  setBookId(id: number) {
    this.bookId = id;
  }

  getBookId(): number {
    return this.bookId;
  }

  //This is A Method To Get All Books Available
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/id:int?id=${bookId}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  updateBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/id:int?id=${this.getBookId()}`; 
    return this.http.put<Book>(url, book); 
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/id:int?id=${bookId}`);
  }

}
