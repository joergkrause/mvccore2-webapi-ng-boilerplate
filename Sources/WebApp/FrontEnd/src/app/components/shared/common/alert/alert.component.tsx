import JSX, { BaseComponent, Properties, CustomElement } from '@nyaf/lib';

export interface AlertProps {
  text: string;
  type?: string;
  close?: boolean;
  hide?: boolean;
}

// generic box that moves content to header
@CustomElement('app-alert')
@Properties<AlertProps>({ text: '', type: 'success', close: false, hide: false })
export class AlertComponent extends BaseComponent<AlertProps> {

  constructor() {
    super();
  }

  async render() {
    const button = this.data.close ? <button type="button" class="close-alert" n-click={e => this.close(e)}>&times;</button> : null;
    const cssClass = [this.data.hide ? 'd-none' : '', 'alert', this.alertType].join(' ');
    return await (
      <div class={cssClass} role="alert">
        <p>{ this.data.text }</p>
        {button}
      </div>
    );
  }

  public get alertType() {
    return `alert-${this.data.type ?? 'success'}`;
  }

  close(e: Event){
    this.data.hide = true;
  }

}
