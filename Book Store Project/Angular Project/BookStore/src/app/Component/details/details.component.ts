import { CommonModule } from '@angular/common';
import { Book } from '../../DataStore/Interface/book';
import { Component, OnInit , Input} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../../Service/book.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IsActivePipe } from '../../Pipes/is-active.pipe';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, 
            HttpClientModule, 
            FormsModule, 
            RouterLink,
            MatTableModule,
            MatCheckboxModule,
            MatCardModule,
            MatButtonModule,
            IsActivePipe],
            
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  book : Book | any;
  constructor(private BookService:BookService, private route: ActivatedRoute){}

  ngOnInit(): void {
    /* Get One Book */
    const id = Number(this.route.snapshot.paramMap.get('bookId'));
    
      this.BookService.getBook(id).subscribe(
        (book: Book) => {
          this.book = book;
          console.log(this.book); // Do something with the retrieved book
        }
      );
  }
 
}
