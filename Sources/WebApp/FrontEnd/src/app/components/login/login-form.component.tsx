import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";
import { ViewModel, IModel, ModelBinder } from "@nyaf/forms";
import { ProvideStore, IStore, Store } from "@nyaf/store";

import store, { loginStoreType, LoginStore } from "./stores/login.store";
import { LOGIN_USER } from "./actions/login.actions";
import { LogonViewModel, AuthenticationErrorViewModel } from "../../services/lib/frontendapi.services";
import { AlertComponent } from '../shared/common/alert/alert.component';
import { LifeCycle } from "@nyaf/lib";

@CustomElement('site-login')
@ProvideStore<loginStoreType>(store)
@ViewModel(LogonViewModel, { ctor: { userName: '', password: '' } })
export class LoginFormComponent extends BaseComponent<{}> implements IStore<loginStoreType>, IModel<LogonViewModel> {

  model: ModelBinder<LogonViewModel>;
  store: Store<LoginStore>;
  logon: LogonViewModel;

  constructor() {
    super();
  }

  async render() {
    return await (
      <>
        <form novalidate>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" n-bind="value: userName" />
            <small id="emailHelp" class="form-text text-muted">Use the data you applied with.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" n-bind="value: password" required />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="remember" name="remember" />
            <label class="form-check-label" for="remember">Remember</label>
          </div>
          <button type="button" class="btn btn-primary" n-on-click={e => this.login(e)}>Submit</button>
        </form>
        <app-alert type="warning" text="Username or password not recognized" close={false} hide={true}></app-alert>
      </>
    );
  }

  login(e: Event) {
    console.log('Modelstate', this.model.state);
    this.store.dispatch(LOGIN_USER, this.model.getScope());
  }

  lifeCycle(state: LifeCycle) {
    if (state === LifeCycle.Load) {
      this.model.setScope(new LogonViewModel());
      this.store.subscribe('error', async (data) => {
        await (this.querySelector<AlertComponent>('app-alert')).setData('hide', false);
      });
      this.store.subscribe('user',async (data) => {
        await (this.querySelector<AlertComponent>('app-alert')).setData('hide', true);
      });
     }
  }


}