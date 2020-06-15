import JSX, { CustomElement, BaseComponent, GlobalProvider } from "@nyaf/lib";
import { IModel, ModelBinder, ViewModel } from "@nyaf/forms";
import { ProvideStore, Store, IStore } from "@nyaf/store";

import store, { registrationStoreType } from "./stores/registration.store";
import { RegistrationViewModel } from "../../services/lib/frontendapi.services";

import { REGISTRATION_REGISTER } from "./actions/registration.actions";
import { AlertComponent } from "../shared/common/alert/alert.component";

@CustomElement('site-register')
@ProvideStore<registrationStoreType>(store)
@ViewModel(RegistrationViewModel)
export class RegisterFormComponent extends BaseComponent<{}> implements IStore<registrationStoreType>, IModel<RegistrationViewModel> {

  private umlautMap = {
    '\u00dc': 'UE',
    '\u00c4': 'AE',
    '\u00d6': 'OE',
    '\u00fc': 'ue',
    '\u00e4': 'ae',
    '\u00f6': 'oe',
    '\u00df': 'ss',
  };

  public error: boolean;
  public errors: string[];
  public isRequesting: boolean;
  public submitted: boolean = false;
  public hide = true;

  model: ModelBinder<RegistrationViewModel>;
  store: Store<registrationStoreType>;

  constructor() {
    super();
    this.model.setScope(new RegistrationViewModel());
    this.store.subscribe('result', async data => {
      await ((this.querySelector('app-alert') as AlertComponent).setData('text', data.result.errors));
      await ((this.querySelector('app-alert') as AlertComponent).setData('hide', false));
    });
    this.store.subscribe('current', data => {
      GlobalProvider.navigateRoute('/dashboard');
    });
  }

  replaceUmlauts(str: string) {
    return str
      .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
        const big = this.umlautMap[a.slice(0, 1)];
        return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
      })
      .replace(new RegExp('[' + Object.keys(this.umlautMap).join('|') + ']', "g"),
        (a) => this.umlautMap[a]
      );
  }

  async render() {
    return await (
      <div class="offset-3 col-6">
        <form n-submit={e => this.submit(e)} spellcheck="false">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" n-bind="value: firstName" />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" n-bind="value: lastName" />
          </div>
          <div class="form-group">
            <label for="lastName">User Name</label>
            <input type="text" class="form-control" id="lastName" n-bind="value: userName" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password"  n-bind="value: password"/>
          </div>
          <div class="form-group">
            <label for="phone">Password</label>
            <input type="phone" class="form-control" id="phone"  n-bind="value: phone"/>
          </div>
          <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        <app-alert type="warning" text="An error occured" close={false}></app-alert>
      </div>
    );
  }

  submit(e: Event) {
    this.store.dispatch(REGISTRATION_REGISTER, this.model.getScope());
  }

}
