import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { routes } from './routes';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { CreatereimbComponent } from './components/createreimb/createreimb.component';
import { ViewpendComponent } from './components/viewpend/viewpend.component';
import { ViewhistoryComponent } from './components/viewhistory/viewhistory.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManViewreimbComponent } from './components/man-viewreimb/man-viewreimb.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './Services/user.service';
import {ReimbursementService} from './Services/reimbursement.service';
import { SpecificreimbComponent } from './components/specificreimb/specificreimb.component';
import {TfilterPipe} from './pipes/tfilter.pipe';
import { SfilterPipe } from './pipes/sfilter.pipe';
import { TablefilterPipe } from './pipes/tablefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateuserComponent,
    CreatereimbComponent,
    ViewpendComponent,
    ViewhistoryComponent,
    ProfileComponent,
    ManViewreimbComponent,
    LoginComponent,
    SpecificreimbComponent,
    TfilterPipe,
    SfilterPipe,
    TablefilterPipe,
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    ReimbursementService,
  ],
  bootstrap: [AppComponent],
  exports: [TfilterPipe,
    SfilterPipe,
    TablefilterPipe,
  ]
})
export class AppModule { }
