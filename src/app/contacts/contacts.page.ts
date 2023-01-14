import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  email = {
    to: 'insuremeproject@gmail.com',
    cc: '',
    bcc: [],
    attachments: [],
    subject: 'Request From Agent',
    body: '',
    isHtml: true
  }
  constructor(public modalCtrl:ModalController, public callNumber:CallNumber ,public emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) => {
      console.log(available);
      
      if(available) {
        this.emailComposer.open(this.email);
      }
     });
  }

  call(){
    this.callNumber.callNumber("+918652343177", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  dismissModal(){
this.modalCtrl.dismiss()
  }

}
