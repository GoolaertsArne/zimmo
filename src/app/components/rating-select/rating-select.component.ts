import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingOption } from '../../models/rating.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rating-select.component.html',
  styleUrl: './rating-select.component.scss',
})
export class RatingSelectComponent {
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

  selectedRating: RatingOption | null = null;
  showDescriptionTextarea = false;

  onRatingChange(newRating: RatingOption): void {
    this.selectedRating = newRating;
    // if (this.selectedRating) {
    //   this.showDescriptionTextarea = true;
    // }

    console.log('Selected Rating:', this.selectedRating);
  }
}
