import JSX, { CustomElement, BaseComponent, LifeCycle } from "@nyaf/lib";

import { ProvideStore, Store, IStore } from "@nyaf/store";
import logoutStore, { logoutStoreType } from "./stores/logout.store";
import { LOGOUT_USER } from "./actions/logout.actions";

@CustomElement('site-logout')
@ProvideStore<logoutStoreType>(logoutStore)
export class LogoutFormComponent extends BaseComponent<{ loggedOut: boolean, loggingOut: boolean }> implements IStore<logoutStoreType> {

  store: Store<logoutStoreType>;

  constructor() {
    super();
    this.store.subscribe('loggedOut', d => {
      this.data.loggedOut = d.loggedOut;
    });
    this.store.subscribe('loggingOut', d => {
      this.data.loggingOut = d.loggingOut;
    });
  }

  async render() {
    return await (<>
      <app-alert n-if={this.data.loggingOut} text="You're about logging out." close={false} type="warning"></app-alert>
      <app-alert n-if={this.data.loggedOut} text="You're successfully being logged out." close={false} type="success"></app-alert>
    </>
    );
  }

  lifeCycle(state: LifeCycle) {
    if (state === LifeCycle.Load){
      this.store.dispatch(LOGOUT_USER, null);
    }
  }

}
