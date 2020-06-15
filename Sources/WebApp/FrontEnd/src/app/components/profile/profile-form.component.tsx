import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";
import { ViewModel, IModel, ModelBinder } from "@nyaf/forms";
import { ProvideStore, Store, IStore } from "@nyaf/store";

import profileStore, { profileStoreType } from "./stores/profile.store";
import { ChangePasswordViewModel } from "../../services/lib/frontendapi.services";
import { PROFILE_SAVE } from "./actions/profile.actions";

@CustomElement('site-profile')
@ProvideStore<profileStoreType>(profileStore)
@ViewModel<ChangePasswordViewModel>(ChangePasswordViewModel)
export class ProfileFormComponent extends BaseComponent<any> implements IStore<profileStoreType>, IModel<ChangePasswordViewModel> {

  store: Store<profileStoreType>
  model: ModelBinder<ChangePasswordViewModel>;

  constructor() {
    super();
    this.model.setScope(new ChangePasswordViewModel());
  }
  

  async render() {
    return await (
      <div class="offset-3 col-6">
        <div class="card" >
          <div class="card-title">Your Profile</div>
          <div class="card-content">
            <form>
              <div class="form-group">
                <label for="old">Old Password</label>
                <input type="password" class="form-control" id="old" name="old" n-bind="value: oldPassword" />
              </div>
              <div class="form-group">
                <label for="new">New Password</label>
                <input type="password" class="form-control" id="new" name="new" n-bind="value: newPassword" />
              </div>
              <div class="form-group">
                <label for="confirm">Confirm New Password</label>
                <input type="password" class="form-control" id="confirm" name="confirm" n-bind="value: newPasswordRepeat" />
              </div>
              <button type="submit" class="btn btn-primary" n-click={e => this.submit(e)}>Submit</button>
            </form>
          </div>
        </div >
      </div>
    );
  }

  submit(e: Event){
    this.store.dispatch(PROFILE_SAVE, this.model.getScope());
  }

}
