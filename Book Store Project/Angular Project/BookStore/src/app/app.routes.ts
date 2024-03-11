import { Routes } from '@angular/router';
import { MainComponent } from './Component/main/main.component';
import { UpdateComponent } from './Component/update/update.component';
import { DetailsComponent } from './Component/details/details.component';
import { CreateComponent } from './Component/create/create.component';
import { DeleteComponent } from './Component/delete/delete.component';

export const routes: Routes = [
    {path:'', component :MainComponent},
    {path:'Update', component :UpdateComponent},
    {path:'Details/:bookId', component :DetailsComponent},
    {path:'Create', component :CreateComponent},
    {path:'Delete/:bookId', component: DeleteComponent}



];
