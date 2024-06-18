import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  public createFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(`api/feedback`, feedback).subscribe({
      next: (response) => {
        console.log('succes', response);
      },
      error: (error) => {
        console.error('error', error);
      },
    });
  }
}
