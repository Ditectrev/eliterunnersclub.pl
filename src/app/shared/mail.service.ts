import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string,
  email?: string,
  subject?: string,
  message?: string
}

@Injectable()
export class MailService {
  private emailUrl = 'https://eliterunnersclub.pl/kontakt'; // Define path to sending email script.

  constructor(private http: Http) { } // TODO: Change to new HTTP client.

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        // console.log('Email sent: mail.service');
        return response;
      })
      .catch(error => {
        // console.log('Email was not send, error', error);
        return Observable.throw(error);
      })
  }
}
