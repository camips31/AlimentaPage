import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BLOG_POSTS, BlogPost } from './blog-posts';
@Component({ selector: 'app-blog', standalone: true, imports: [CommonModule, RouterLink], templateUrl: './blog.component.html', styleUrl: './blog.component.css' })
export class BlogComponent {
 readonly blogPosts = BLOG_POSTS;
 article?: BlogPost;
 isArticle = false;
 constructor() {
  inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
   this.isArticle = params.has('slug');
   this.article = BLOG_POSTS.find(post => post.slug === params.get('slug'));
  });
 }
}
