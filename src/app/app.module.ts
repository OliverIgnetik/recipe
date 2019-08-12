import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services
import {RecipeService} from './services/recipe.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ShowRecipeComponent } from './pages/show-recipe/show-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditRecipeComponent,
    NewRecipeComponent,
    ShowRecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
