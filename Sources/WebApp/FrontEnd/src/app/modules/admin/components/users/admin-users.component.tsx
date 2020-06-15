import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";

import store from "./stores/users.store";
import { ProvideStore, Store, IStore } from "@nyaf/store";
import { globalStoreType } from "app/services/flux/stores/global.store";

@CustomElement('admin-users')
@ProvideStore<globalStoreType>(store)
export class AdminUsersComponent extends BaseComponent<any> {

  async render() {
    return await (
      <>
      </>
    );
  }

}
