import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { PostListComponent } from "../post-list/post-list.component";
@Component({
  selector: 'app-blog',
  imports: [FormComponent, PostListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  

  ngOnInit() {
    // this.getData()
  }


}
