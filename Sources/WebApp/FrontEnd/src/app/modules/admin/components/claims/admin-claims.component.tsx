import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";

import store, { claimsStoreType  } from "./stores/claims.store";
import { ProvideStore, Store, IStore } from "@nyaf/store";

@CustomElement('admin-claims')
@ProvideStore<claimsStoreType>(store)
export class AdminClaimsComponent extends BaseComponent<any> {

  constructor(){
    super();
  }

  async render() {
    return await (
      <>
      </>
    );
  }

}
