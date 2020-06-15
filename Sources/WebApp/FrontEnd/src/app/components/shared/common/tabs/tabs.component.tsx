import JSX, { BaseComponent, CustomElement, LifeCycle, Events, ShadowDOM, UseParentStyles } from '@nyaf/lib';
import { v4 as uuidv4 } from 'uuid';

require('./tabs.component.scss');

interface TabStore {
	node: Node;
	targetId: string;
	id: string;
}

interface IMaterialTabsDefaultConfig {
	materialtabsDeferred?: number;
	deep?: boolean;
	fixedTabs?: boolean;

	clsComponent?: string;
	clsTab?: string;
	clsTabActive?: string;
	clsMarker?: string;

	onBeforeTabOpen?();
	onTabOpen?();
	onTabsScroll?();
	onTabsCreate?();
};

// tslint:disable-next-line:max-classes-per-file
@CustomElement('app-tabs')
@Events(['all'])
@ShadowDOM(true)
@UseParentStyles(true)
export class TabsComponent extends BaseComponent<{}> {

	private tabChildren: TabStore[] = [];

	constructor() {
		super();
	}

	async render() {
		let first = 0;
		const tabHeaders = Array.prototype.slice.call(this.children).map((child: Element) => {
			const targetId: string = child.id ?? '_' + uuidv4();
			child.setAttribute('id', targetId);
			this.tabChildren.push({
				node: child,
				targetId,
				id: child.id
			});
			return (
				<li class={0 === first++ ? 'active' : ''}>
					<a href={`#${targetId}`} >{child.getAttribute("title")}</a>
				</li>
			);
		});
		return await (
			<>
				<ul data-expand='true' role="nav" class="pos-absolute tabs-material tabs-adjustment">
					{tabHeaders}
					<span class="tab-marker"></span>
				</ul>
				<div class='cell-12 border bd-default no-border-top mt-15' data-tabs>
					<slot></slot>
				</div>
			</>
		)
	}

	lifeCycle(lc: LifeCycle) {
		if (lc === LifeCycle.Load) {
			this.shadowRoot.querySelectorAll('li')
				.forEach(li => {
					li.addEventListener('click', e => this.selectTab(e));
					if (li.classList.contains('active')) {
						this.openTab(li.querySelector('a').getAttribute('href'));
					}
				});
		}
	}

	private selectTab(e: Event) {
		let targetId = (e.target as HTMLElement).getAttribute('href');
		if (!targetId) {
			const innerA = (e.target as HTMLElement).querySelector('a');
			if (innerA) {
				targetId = innerA.getAttribute('href');
			}
		}
		this.openTab(targetId);
	}

	async setTab(id: string): Promise<void> {
		const targetId = this.tabChildren.filter((child) => child.id === id).shift().targetId;
		// use shadowRoot because it is shadowed
		this.openTab(`#${targetId}`);
		return Promise.resolve();
	}

	private openTab(targetId: string) {
		const tabs = this.shadowRoot.querySelectorAll('li');
		const tab = this.querySelector<HTMLElement>(targetId);
		const li = this.shadowRoot.querySelector(`[href="${targetId}"]`).parentElement;
		let tabWidth: number;
		let tabLeft: number;
		// hide all
		const tabContent = this.querySelectorAll('app-tab');
		tabContent.forEach((t: HTMLElement) => {
			t.classList.add('hide');
		});
		// calcuate marker
		tabWidth = li.clientWidth;
		tabLeft = li.offsetLeft;
		// deactivate all
		tabs.forEach(t => {
			t.classList.remove('active');
		});
		// activate
		tab.classList.add("active");
		// move the marker
		const marker = this.shadowRoot.querySelector<HTMLElement>('span.tab-marker');
		const animation = marker.animate(
			[
				{
					left: `${marker.style.left || '0px'}`,
					width: `${marker.style.width || '0px'}`
				},
				{
					left: `${tabLeft}px`,
					width: `${tabWidth}px`
				}
			],
			{
				duration: 250,
				easing: 'ease-in-out'
			});
		animation.onfinish = () => {
			marker.style.left = `${tabLeft}px`;
			marker.style.width = `${tabWidth}px`;
		};
		// make tabContent visible
		const currentTab = this.querySelector('app-tab' + targetId);
		currentTab.classList.remove('hide');
	}



}

