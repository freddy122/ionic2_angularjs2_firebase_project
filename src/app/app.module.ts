import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PersonnelPage } from '../pages/personnel-page/personnel-page';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
	apiKey: "AIzaSyC2BagMVJQWWeu9BD7MMVCJ1MMRvnPwIIw",
    authDomain: "myappionic2-9bacd.firebaseapp.com",
    databaseURL: "https://myappionic2-9bacd.firebaseio.com",
    storageBucket: "myappionic2-9bacd.appspot.com",
    messagingSenderId: "825263300868"

};
@NgModule({
  declarations: [
    MyApp,
	PersonnelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	PersonnelPage
  ],
  providers: []
})
export class AppModule {}
