import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingOption } from './rating.model';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../../api/services/feedback.service';

@Component({
  selector: 'feedback-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
})
export class FeedbackFormComponent {
  feedbackForm = new FormGroup({
    rating: new FormControl(null),
    description: new FormControl('', Validators.required),
  });

  constructor(private feedbackService: FeedbackService) {}

  selectedRating: number | null = null;
  formSubmitted = false;

  get formRating() {
    return this.feedbackForm.get('rating');
  }

  get description() {
    return this.feedbackForm.get('description');
  }

  ratingOptions: RatingOption[] = [
    {
      value: 1,
      label: 'Very Bad',
      iconSrc: 'assets/icons/very-bad.svg',
      class: 'very-bad',
    },
    {
      value: 2,
      label: 'Bad',
      iconSrc: 'assets/icons/bad.svg',
      class: 'bad',
    },
    {
      value: 3,
      label: 'Average',
      iconSrc: 'assets/icons/average.svg',
      class: 'average',
    },
    {
      value: 4,
      label: 'Good',
      iconSrc: 'assets/icons/good.svg',
      class: 'good',
    },
    {
      value: 5,
      label: 'Excellent',
      iconSrc: 'assets/icons/excellent.svg',
      class: 'excellent',
    },
  ];

  onRatingChange(newRating: number): void {
    this.selectedRating = newRating;
  }

  onSubmit(form: FormGroup) {
    // Mark all fields as touched to display validation errors
    form.markAllAsTouched();
    if (form.valid) {
      this.feedbackService.createFeedback(form.value);
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }
}
