import { IBindingHandler, Binding } from "@nyaf/forms";
import { ConfirmSuccessErrorComponent } from "../common/confirmsuccesserror.component";

/**
 * A special bi-directional binder for a custom component.
 */
export class VisibilityBinder<T extends ConfirmSuccessErrorComponent> implements IBindingHandler
{
	bind(binding: Binding): void {
		(binding.el as T).addEventListener('done', () => {
			this.listener(binding);
		})
		this.react(binding);
	}
	react(binding: Binding): void {
		(binding.el as T).visibility = !!binding.value;
	}
	listener(binding: Binding): void {
    const value = (binding.el as T).visibility;
    binding.value = value;
  }
}
