import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { FilterPipe } from '../utils/filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PostsComponent, PopupModalComponent, FilterPipe],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [PopupModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
