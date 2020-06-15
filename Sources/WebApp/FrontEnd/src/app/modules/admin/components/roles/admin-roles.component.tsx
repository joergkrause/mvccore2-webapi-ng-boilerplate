import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";

import store from "./stores/roles.store";
import { ProvideStore, Store, IStore } from "@nyaf/store";
import { globalStoreType } from "app/services/flux/stores/global.store";

@CustomElement('admin-roles')
@ProvideStore<globalStoreType>(store)
export class AdminRolesComponent extends BaseComponent<globalStoreType> {

  async render() {
    return await (
      <>
      </>
    );
  }

}
