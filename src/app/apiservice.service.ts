import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
 
  private url = 'https://jsonplaceholder.typicode.com/posts'; // made this private because this is only for the implementation detail of this class. Nowhere outside this class we want this field to be visible.

  constructor(private http: HttpClient){ }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post:any){
    return this.http.post(this.url, JSON.stringify(post));
  }
  
  updatePost(post:any){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id:any){
    return this.http.delete(this.url + '/' + id);
  }
}
