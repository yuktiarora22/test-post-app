import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private modalService: NgbModal
  ) {}

  posts: any[] = [];
  loadingPosts = false;
  counter = 10; // to get data every 10 seconds
  countDown; // showing when the next hit will be made for more posts
  searchText = ''; // used to filter posts by title

  ngOnInit(): void {
    this.loadingPosts = true;
    this.postsService.getPosts(this.counter).subscribe(res => {
      this.showTimer();
      this.posts = this.posts.concat(res.hits);
      this.loadingPosts = false;
    });
  }

  showPost(post): void {
    // open modal popup to show json post data
    const modalRef = this.modalService.open(PopupModalComponent);
    modalRef.componentInstance.header = post.title + ': JSON data';
    modalRef.componentInstance.postData = post;
  }

  showTimer(): void {
    this.countDown = this.postsService.getCounter(this.counter);
  }
}
