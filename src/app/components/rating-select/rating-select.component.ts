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
  selector: 'app-rating-select',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './rating-select.component.html',
  styleUrl: './rating-select.component.scss',
})
export class RatingSelectComponent {
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
      activeSrc: 'assets/icons/very-bad-active.svg',
      class: 'very-bad',
    },
    {
      value: 2,
      label: 'Bad',
      iconSrc: 'assets/icons/bad.svg',
      activeSrc: 'assets/icons/bad-active.svg',
      class: 'bad',
    },
    {
      value: 3,
      label: 'Average',
      iconSrc: 'assets/icons/average.svg',
      activeSrc: 'assets/icons/average-active.svg',
      class: 'average',
    },
    {
      value: 4,
      label: 'Good',
      iconSrc: 'assets/icons/good.svg',
      activeSrc: 'assets/icons/good-active.svg',
      class: 'good',
    },
    {
      value: 5,
      label: 'Excellent',
      iconSrc: 'assets/icons/excellent.svg',
      activeSrc: 'assets/icons/excellent-active.svg',
      class: 'excellent',
    },
  ];

  onRatingChange(newRating: number): void {
    this.selectedRating = newRating;

    console.log('Selected Rating:', this.selectedRating);
  }

  getIconSrc(rating: RatingOption) {
    return this.selectedRating === rating.value
      ? rating.activeSrc
      : rating.iconSrc;
  }

  onSubmit(form: FormGroup) {
    // Mark all fields as touched to display validation errors
    form.markAllAsTouched();
    if (form.valid) {
      console.log('Form is valid');
      this.feedbackService.createFeedback(form.value);
      this.formSubmitted = true;
    } else {
      console.log('Form is invalid');
      this.formSubmitted = false;
    }
  }
}
