import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FeedbackComponent],
})
export class AppComponent {
  title = 'zimmo-task';
}
