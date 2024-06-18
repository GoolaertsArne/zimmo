import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingOption } from '../../models/rating.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-select',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './rating-select.component.html',
  styleUrl: './rating-select.component.scss',
})
export class RatingSelectComponent {
  // constructor(private formbuilder: FormBuilder) {}

  feedbackForm = new FormGroup({
    rating: new FormControl(null),
    description: new FormControl('', Validators.required),
  });

  selectedRating: RatingOption | null = null;

  get formrating() {
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
    console.log('testtttttt');
    console.log('invalid?', form.invalid); // true or false
    console.log('dirty', form.dirty); // true or false
    console.log('touched', form.touched); // true or false
    console.log('Form', form);
  }
}
