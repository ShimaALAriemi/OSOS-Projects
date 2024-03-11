import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { BookService } from '../../Service/book.service';
import { FormBuilder, FormControl, FormGroup,FormsModule,Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../../DataStore/Interface/book';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,
            ReactiveFormsModule,
            HttpClientModule,
            FormsModule,
            MatFormFieldModule,
          MatLabel],

  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent  {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder,private BookService:BookService, private route: Router){
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      isActive: [false] // Adding isActive with default value true
    });

    
  }



  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      this.BookService.addBook(newBook).subscribe(
        (x:Book) => {
          console.log('Book added successfully:', x);
          // Reset the form after successful submission
          this.bookForm.reset();
          this.route.navigate(['/']);
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
    }
}

}
