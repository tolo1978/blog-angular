import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  imports: [DatePipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {


  // le `pedimos al servicio que nos de los posts

  arrPosts: IPost[] = [];
  postsService = inject(PostsService);


  ngOnInit() {
    this.arrPosts = this.postsService.getAllPosts();
  }


}
