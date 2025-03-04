import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-blog',
  imports: [DatePipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newPost: IPost = { id: 0, title:'', url:'', author:'', date:'', body:''}
  id: number = 1;
  
  arrPosts: IPost[] = [
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

  ngOnInit() {
    // this.getData()
  }

  guardarPost() {
    if(this.newPost.title !== "" && this.newPost.url !== "" && this.newPost.author !== "" && this.newPost.date !== "" && this.newPost.body !== "") {
      this.newPost.id = this.arrPosts.length + 1;
      this.arrPosts.push(this.newPost)
      this.newPost = { id: 1, title:'', url:'', author:'', date:'', body:''}
      // puedo insertar el nuevo post en el array
    } else {
      alert("Todos los campos son obligatorios");
    }
    console.log(this.arrPosts)
  }
}
