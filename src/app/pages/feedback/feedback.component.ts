import { Component } from '@angular/core';
import { FeedbackFormComponent } from '../../components/feedback-form/feedback-form.component';
import { SellRentComponent } from '../../components/sell-rent/sell-rent.component';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  imports: [FeedbackFormComponent, SellRentComponent, BlogListComponent],
})
export class FeedbackComponent {}
