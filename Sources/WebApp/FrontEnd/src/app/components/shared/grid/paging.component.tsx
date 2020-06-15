import JSX, { BaseComponent, Properties, CustomElement, Events } from '@nyaf/lib';

export interface PagingProps {
  mode: 'full' | 'narrow';
  model?: [];
  pagesize: number;
  current: number;
}

@CustomElement('app-paging')
@Properties<PagingProps>({ model: [], pagesize: 10, mode: 'narrow', current: 0 })
@Events(['step'])
export class PagingComponent extends BaseComponent<PagingProps> {

  constructor() {
    super();
  }

  invokeStep(page: number, pageSize: number) {
    const evt: CustomEventInit = {
      bubbles: true,
      cancelable: false,
      detail: {
				page,
				pageSize
      }
    };
    this.dispatch('step', evt);
	}

  render() {
    const noPages = null;
    const model = this.data.model;
    if (!(model && model.length)) {
      return noPages;
    }
    // 0 based
    const current = +(this.data.current || 0);
    const first = 0;
    const maxPageIndex = Math.ceil(model.length / +(this.data.pagesize));
    const pageButtons = [];
    if (maxPageIndex < 10) {
      for (let i = 0; i < maxPageIndex; i++) {
        const pageClasses = 'page-item ' + (i === current ? 'disabled bg-blue ' : '');
        pageButtons.push(
          <li class={pageClasses}>
            <a class='page-link' data-page={i} n-on-click={e => this.jump(e)}> {i + 1} </a>
          </li>
        )
      }
    }
    else {
      pageButtons.push(
      <li class='page-item disabled bg-red'>
        <a class='page-link' > { `Seite ${current + 1} von ${maxPageIndex}` } </a>
      </li>)
    }
    const prevPageNumber = Math.max(0, current - 1);
    const nextPageNumber = Math.min(current + 1, maxPageIndex - 1);
    const prevNoLinkClasses = 'page-item ' + (current === 0 ? 'disabled' : '');
		const lastNoLinkClasses = 'page-item ' + (current === maxPageIndex - 1 ? 'disabled' : '');
		const options = [10, 15, 20, 25].map(n => {
			if (+(this.data.pagesize) === n) {
				return (<option value={n} selected>{n}</option>);
			} else {
				return (<option value={n}>{n}</option>);
			}
		});
		const noMore = current === maxPageIndex - 1 ? <span class="fg-orange">Keine weiteren Einträge</span> : null;
    return (
      <div class="cell-12">
				<span class="float-right bg-blue fg-white rounded p-1">{model.length === 1 ? 'Ein Eintrag' : `${model.length} Einträge`}</span>
				<ul class="pagination">
					<li>
						<select name="itemsperpage" style="width: 60px; height: 33px; margin-top: 4px" n-on-change={e => this.jump(e)} n-async>
							{options}
						</select>
					</li>
					<li class={prevNoLinkClasses}><a class="page-link" href="#" data-page={first} n-on-click={e => this.jump(e)}>
						<span class="mif-chevron-thin-left"></span>
					</a></li>
					<li class={prevNoLinkClasses}><a class="page-link" href="#" data-page={prevPageNumber} n-on-click={e => this.jump(e)}>
							<span class="mif-chevron-left"></span>
					</a></li>
          {pageButtons}
					<li class={lastNoLinkClasses}><a class="page-link" href="#" data-page={nextPageNumber} n-on-click={e => this.jump(e)}>
						<span class="mif-chevron-right"></span>
					</a></li>
					<li class={lastNoLinkClasses}><a class="page-link" href="#" data-page={maxPageIndex - 1} n-on-click={e => this.jump(e)}>
						<span class="mif-chevron-thin-right"></span>
					</a></li>
				</ul>
				{ noMore }
			</div>
    );
  }

  async jump(e: Event) {
    const page = Number((e.target as HTMLElement).getAttribute('data-page'))
		const val = (document.querySelector('[name="itemsperpage"]') as HTMLSelectElement).value;
		this.data.pagesize = +val;
		e.preventDefault();
		this.invokeStep(page, +val);
	}
}
