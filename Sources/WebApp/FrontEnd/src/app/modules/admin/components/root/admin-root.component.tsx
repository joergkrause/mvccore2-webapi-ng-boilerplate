import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";


@CustomElement('admin-root')
export class AdminRootComponent extends BaseComponent<any> {

  constructor() {
    super();
  }

  async render() {
    return await (
      <>
        <div class='row'>
          <app-tabs class="col" id="adminTabs">
            <app-tab title="Users" id="a1">
              <admin-users></admin-users>
            </app-tab>
            <app-tab title="Roles" id="a2">
              <admin-roles></admin-roles>
            </app-tab>
            <app-tab title="Claims" id="a3">
              <admin-claims></admin-claims>
            </app-tab>
            <app-tab title="Help" id="a3">
              <h2>Administration Center</h2>
              <hr />
              <div class="alert alert-info">
                Manage users, roles, and claims here. The backend has hardwired protection for two roles:
  <ul>
                  <li>'admin': Administrative access to this module</li>
                  <li>'user': Access to all demo data</li>
                </ul>
  The backend also provides additional protection by using the claim 'role=api_access'. All users that need
  backend API access need to carry this claim.
</div>
            </app-tab>
          </app-tabs>
        </div>
      </>
    )
  }

}
