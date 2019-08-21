import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './com/header/header.component';
import { FooterComponent } from './com/footer/footer.component';
import { SignCardComponent } from './com/sign-card/sign-card.component';
import { SignInComponent } from './account-details/sign-in/sign-in.component';
import { RegisterComponent } from './account-details/register/register.component';
import { MyMediaPageComponent } from './my-media-page/my-media-page.component';
import { UploadMediaSingleComponent } from './upload-media/upload-media-single/upload-media-single.component';
import { UploadMediaMultipleComponent } from './upload-media/upload-media-multiple/upload-media-multiple.component';
import { UserCardComponent } from './com/user-card/user-card.component';
import { MediaCardComponent } from './com/media-card/media-card.component';
import { MediaHolderCardComponent } from './com/media-holder-card/media-holder-card.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountUpdateComponent } from './account-details/sign-in/account-update/account-update.component';
import { BlockedAccountsComponent } from './account-details/sign-in/blocked-accounts/blocked-accounts.component';
import { NewsFeedComponent } from './account-details/sign-in/news-feed/news-feed.component';
import { SearchComponent } from './account-details/sign-in/search/search.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { FollowComponent } from './follow/follow.component';
import { fromEventPattern } from 'rxjs';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignCardComponent,
    SignInComponent,
    RegisterComponent,
    MyMediaPageComponent,
    UploadMediaSingleComponent,
    UploadMediaMultipleComponent,
    UserCardComponent,
    MediaCardComponent,
    MediaHolderCardComponent,
    MediaDetailComponent,
    AccountDetailsComponent,
    AccountUpdateComponent,
    BlockedAccountsComponent,
    NewsFeedComponent,
    SearchComponent,
    UploadMediaComponent,
    FollowComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
