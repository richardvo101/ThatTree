import {Routes} from '@angular/router';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { CreatereimbComponent } from './components/createreimb/createreimb.component';
import { ManViewreimbComponent } from './components/man-viewreimb/man-viewreimb.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewhistoryComponent } from './components/viewhistory/viewhistory.component';
import { ViewpendComponent } from './components/viewpend/viewpend.component';
import { LoginComponent } from './components/login/login.component';
import { SpecificreimbComponent } from './components/specificreimb/specificreimb.component';


export const routes: Routes = [
    {
        path: 'createuser',
        component: CreateuserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'createreimb',
        component: CreatereimbComponent
    },
    {
        path: 'man-viewreimb',
        component: ManViewreimbComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'viewhistory',
        component: ViewhistoryComponent
    },
    {
        path: 'viewpend',
        component: ViewpendComponent
    },
    {
        path: 'reimbursement',
        component: SpecificreimbComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    ];
