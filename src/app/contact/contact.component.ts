import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {IMessage, MailService} from '../shared/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  bank = 'Nazwa banku: BGŻ BNP PARIBAS';
  cash = 'Numer rachunku: 53 1600 1462 1814 4353 8000 0001';
  street = 'ul. Przedwiośnie 45/1';
  city = '51-211 Wrocław';
  mail = 'kontakt@eliterunnersclub.pl';
  name = 'ELITE RUNNERS CLUB';
  phone = '+48 690 422 543';

  wrongName = 'Wpisz swoje imię';
  wrongEmail = 'Wpisz adres email';
  wrongSubject = 'Wpisz temat wiadomości';
  wrongMessage = 'Wpisz treść wiadomości';
  sendMessage = 'Wyślij wiadomość';
  wrongForm = 'W formularzu kontaktowym znajdują się niepoprawne dane';
  sentMessage = 'Wiadomość została wysłana';

  signupForm: FormGroup;
  submitted: boolean;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    // Set up form inputs.
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'subject': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)
      })
    });

    this.submitted = false;
  }

  onSubmit(message: IMessage) {
    this.submitted = true;

    this.mailService.sendEmail(message).subscribe(res => {
      // console.log('After onSubmit success', res);
      this.signupForm.reset(); // Reset form on submit.

      setTimeout(function () {
        this.submitted = false;
      }, 4000);
    }, error => {
      // console.log('After onSubmit error', error);
    });
    // console.log(this.signupForm.value.userData.name);
    // console.log(message);
  }
}
