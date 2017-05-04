import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { QuestionListComponent } from './question-list/question-list.component';

export const ROUTES: Routes = [
  { path: '',           component: AppComponent },
  { path: 'questions',  component: QuestionListComponent }
];
