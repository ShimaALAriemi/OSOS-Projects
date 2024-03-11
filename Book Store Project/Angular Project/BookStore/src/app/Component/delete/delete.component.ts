import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Service/book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [ 
    HttpClientModule, 
    RouterLink,
  ],

  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  constructor(private BookService:BookService, private route: ActivatedRoute, private routa: Router){}

  ngOnInit():void {
    const bookId = Number(this.route.snapshot.paramMap.get('bookId'));

    // Call the service method to delete the book
    this.BookService.deleteBook(bookId).subscribe(
      () => {
        console.log('Book deleted successfully');
        // Redirect to the main page or any other page after deletion
        this.routa.navigate(['/']);
      },
      error => {
        console.error('Error deleting book:', error);
        // Handle error
      }
    );

    }


}
