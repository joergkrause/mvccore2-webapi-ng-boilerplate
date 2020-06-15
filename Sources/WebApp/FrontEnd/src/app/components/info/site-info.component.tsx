import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";

@CustomElement('site-info')
export class SiteInfoComponent extends BaseComponent<{}> {

  async render() {
    return await (<div class="alert alert-info">
      There are three pre-defined users:
      <ul>
        <li>Gerry Guest (Login: weird@guest.com, Password: P@ssw0rd)</li>
        <li>Doris Demo (Login: doris@demo.com, Password: P@ssw0rd)</li>
        <li>Andy Admin (Login: andy@admin.com, Password: P@ssw0rd)</li>
      </ul>
     There are three roles defined, each role has one member:
      <ul>
        <li>Guest (Member: Weird Guest)</li>
        <li>User (Member: Doris Demo)</li>
        <li>Admin (Member: Andy Admin)</li>
      </ul>
      <p>There is one Policy as a User claim defined:</p> <pre>{ '{' }"role": "api_access" { '}' }</pre>
      <p>The members "Doris Demo" and "Andy Admin" have this claim.</p>
      <p>Weird Guest has no claim and hence cannot access the backend API.</p>
      <div class="alert alert-danger">
        <p>Login, Register and this Info page can be opened by all users. </p>
        <p>A Guard is protecting the dashboard from user not properly logged on. If you click on "Dashboard" as an anonymous user
     your're are going to be redirected to the login form.</p>
      </div>
    </div>
    );
  }

}
