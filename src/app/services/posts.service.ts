import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPosts: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Author One',
      date: '2023-01-01',
      body: 'This is the body of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Author Two',
      date: '2023-02-01',
      body: 'This is the body of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Author Three',
      date: '2023-03-01',
      body: 'This is the body of the third post.'
    }
  ];
  id: number = 4;


 getAllPosts(): IPost[] {
  return this.arrPosts;
  }

  insert(newpost: IPost): string {
    this.arrPosts.push(newpost);
    this.id++;
    return "Post inseertado con exito";
  }
}
