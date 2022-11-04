import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  httpsEnabled: string;
  httpsUrl: string;
  hostname: string;
  port: string;
  formattedAgentUrl: string;

  constructor(private spinner: SpinnerService) {
    this.httpsEnabled = environment.httpsEnabled;
    if(this.httpsEnabled === 'true') {
      this.formattedAgentUrl = environment.httpsUrl;
      console.log('Issuer agent is running on: ' + this.formattedAgentUrl);
    } else {
      this.hostname = environment.ip;
      this.port =  environment.verifierPort;
      this.formattedAgentUrl = `http://${this.hostname}` + ":" + this.port;
      console.log('Issuer agent is running on: ' + this.formattedAgentUrl);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    this.spinner.show();
    //if using i18n files,
    //use frontend's port number
    if (!req.url.includes('/assets/i18n/')) {
      req = req.clone({
        url: this.formattedAgentUrl + req.url
      });
    }
    return next.handle(req).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
