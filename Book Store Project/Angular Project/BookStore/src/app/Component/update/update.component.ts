import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../DataStore/Interface/book';
import { BookService } from '../../Service/book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IsActivePipe } from '../../Pipes/is-active.pipe';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, IsActivePipe],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  book: Book | any;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private BookService: BookService, private route: Router) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      isActive: [] // Adding isActive with default value true
    });

  }


  ngOnInit(): void {
    /* Get The Book */
    const bookId = this.BookService.getBookId();

    this.BookService.getBook(bookId).subscribe(
      (book: Book) => {
        this.book = book;
        console.log(this.book); // Do something with the retrieved book

        this.bookForm.patchValue({
          name: this.book.name,
          author: this.book.author,
          description: this.book.description,
          isActive: this.book.isActive
        });
      }
    );

  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const bookId = this.BookService.getBookId();
      const updatedBook = this.bookForm.value;

      // Set bookId for Updated Book 
      updatedBook.BookId = bookId;
      updatedBook.IsActive = this.bookForm.get('isActive')?.value;

      this.BookService.updateBook(updatedBook).subscribe(
        (x: Book) => {
          console.log('Book Updated successfully:', x);
          // Reset the form after successful submission
          this.bookForm.reset();
          this.route.navigate(['/']);
        },
        (error) => {
          console.error('Error Updating book:', error);
        }
      );
    }
  }


}