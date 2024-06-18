import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  imports: [BlogCardComponent],
})
export class BlogListComponent {
  blogPosts = [1, 2, 3, 4];
}
