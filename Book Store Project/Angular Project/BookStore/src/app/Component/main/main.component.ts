import { CommonModule } from '@angular/common';
import { Book } from '../../DataStore/Interface/book';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../../Service/book.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IsActivePipe } from '../../Pipes/is-active.pipe';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, 
            HttpClientModule, 
            FormsModule, 
            RouterLink,
            MatTableModule,
            MatCheckboxModule,
            IsActivePipe],

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  constructor(private BookService:BookService, private route: Router){}

  displayedColumns = ['#', 'Name', 'Author', 'Description', 'IsActive','View','Update','Delete'];
  /* The Array is of Type Any */
  books : any= [];

  setBookId(id: number) {
    this.BookService.setBookId(id);
  }

  ngOnInit(): void {
    this.BookService.getBooks().subscribe(
      (books:Book[]) => {
        this.books = books;

        /* CHECK THIS*/
        if (books.length > 0) {
          console.log(books); // Only access Name if there are books
        } else {
          console.log("No books found."); // Handle the case where no books are retrieved
        }
      }
    ); 
  }

}
