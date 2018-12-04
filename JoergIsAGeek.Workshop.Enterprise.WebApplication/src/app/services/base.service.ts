import { Observable } from 'rxjs/Observable';

export abstract class BaseService {

  constructor() { }

  protected handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');

    // is applicationError 
    if (applicationError) {
      return Observable.throw(applicationError);
    }

    // has modelState Error
    var modelStateErrors: string = '';
    if (error.error) {
      var serverError = error.error;

      if (!serverError.type) {
        for (var key in serverError) {
          if (serverError[key])
            modelStateErrors += serverError[key] + '\n';
        }
      }

      modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
      return Observable.throw(modelStateErrors || 'Server error');
    }

    // is regular message from infrastructure is somehow unexpected
    return Observable.throw(error.message);
  }
}