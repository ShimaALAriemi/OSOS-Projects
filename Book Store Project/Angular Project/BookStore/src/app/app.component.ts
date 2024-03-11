import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MainComponent } from './Component/main/main.component';
import { UpdateComponent } from './Component/update/update.component';
import { DetailsComponent } from './Component/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UpdateComponent,
    RouterLink,
    DetailsComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookStore';
}
