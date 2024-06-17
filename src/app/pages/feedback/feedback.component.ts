import { Component } from '@angular/core';
import { RatingSelectComponent } from '../../components/rating-select/rating-select.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  imports: [RatingSelectComponent],
})
export class FeedbackComponent {}
