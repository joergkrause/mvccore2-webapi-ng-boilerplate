import JSX, { CustomElement, BaseComponent, GlobalProvider, Properties, LifeCycle } from "@nyaf/lib";
import { ProvideStore, IStore, Store } from "@nyaf/store";

import store, { dashboardStore } from "./stores/dashboard.store";
import { globalStoreType } from "../../services/flux/stores/global.store";
import { MachineViewModel } from "app/services";
import { DASHBOARD_LOAD } from "./actions/dashboard.actions";


type dashboardStoreTypes = dashboardStore;

interface DashboardProperties {
	userName: string;
	email: string;
	machines: MachineViewModel[];
	numOfMachines: number;
}

@CustomElement('app-dashboard')
@ProvideStore<globalStoreType>(store)
@Properties<DashboardProperties>({ userName: '', email: '', machines: [], numOfMachines: 0 })
export class DashboardComponent extends BaseComponent<DashboardProperties> implements IStore<dashboardStore> {

	store: Store<dashboardStoreTypes>;

	constructor() {
		super();
		this.store.subscribe('machines', data => {
			this.data.machines = data.machines;
		});
	}

	async render() {
		const listOfMachines = []; // <li>{ machine.name } ( { machine.location } )</li>
		return await (
			<>
				<h2>Dashboard</h2>
				<div class="row">
					<div class="col-6">
						<div class="card">
							<div class="card-image-top">
								<img class="col" src="assets/images/slider1.jpg" />
							</div>
							<div class="card-body">
								<h5 class="card-title">User Data</h5>
								<div class="card-content">
									<dl>
										<dt>User Name</dt>
										<dd n-bind="textContent:userName"></dd>
										<dt>E-Mail</dt>
										<dd n-bind="textContent:email"></dd>
									</dl>
								</div>
								<div>
									<button type="button" class="btn btn-sm btn-success" n-click={e => this.showProfile(e)}>MORE...</button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card">
							<div class="card-image-top">
								<img class="col" src="assets/images/slider2.jpg" />
							</div>
							<div class="card-body">
								<h5 class="card-title">Machine Data</h5>
								<div class="card-content">
									<dl>
										<dt>Number of Machines</dt>
										<dd n-bind="textContent:numOfMachines"></dd>
										<dt>List of Machines</dt>
										<dd>
											<ul>
												{ listOfMachines }
											</ul>
										</dd>
									</dl>
									<div>
										<button type="button" class="btn btn-sm btn-secondary">MANAGE</button>
										<button type="button" class="btn btn-sm btn-success">MORE...</button>
									</div>
								</div>
								<div >No User - please logon</div>
								<div>No Machines - please logon</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	showProfile(e: Event) {
		GlobalProvider.navigateRoute('/profile');
	}

	lifeCycle(state: LifeCycle){
		if (state === LifeCycle.Load){
			this.store.dispatch(DASHBOARD_LOAD, null);
		}
	}

}
