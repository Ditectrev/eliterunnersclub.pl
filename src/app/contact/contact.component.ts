import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MailService, IMessage } from '../shared/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'RunnersElite';
  description = 'Pierwszy w Polsce e-klub biegowy w formie platformy do wspólnego realizowania planów treningowych, wymiany doświadczeń oraz wspólnych startów biegowych.';
  street = 'ul. Boguszyce 139';
  city = '56-400 Oleśnica';
  mail = 'kontakt@runners.elite';
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
      console.log('MailService success', res);

      this.signupForm.reset(); // Reset form on submit.

      // TODO: Fix to show sent message for 5 seconds.
      setTimeout(function () {
        this.submitted = false;
      }, 5000);
    }, error => {
      console.log('MailService error', error);
    });
    console.log(this.signupForm.value.userData.name);
    console.log(message);
  }
}
