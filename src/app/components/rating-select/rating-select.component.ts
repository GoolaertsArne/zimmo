import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingOption } from '../../models/rating.model';
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

  selectedRating: RatingOption | null = null;
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
      color: 'red',
      iconSrc: 'assets/icons/very-bad.svg',
      class: 'very-bad',
    },
    {
      value: 2,
      label: 'Bad',
      color: 'orange',
      iconSrc: 'assets/icons/bad.svg',
      class: 'bad',
    },
    {
      value: 3,
      label: 'Average',
      color: 'yellow',
      iconSrc: 'assets/icons/average.svg',
      class: 'average',
    },
    {
      value: 4,
      label: 'Good',
      color: 'lightgreen',
      iconSrc: 'assets/icons/good.svg',
      class: 'good',
    },
    {
      value: 5,
      label: 'Excellent',
      color: 'green',
      iconSrc: 'assets/icons/excellent.svg',
      class: 'excellent',
    },
  ];

  onRatingChange(newRating: RatingOption): void {
    this.selectedRating = newRating;

    console.log('Selected Rating:', this.selectedRating);
  }

  onSubmit(form: FormGroup) {
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
