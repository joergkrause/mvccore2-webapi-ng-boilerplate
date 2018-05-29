import { Display, Required } from 'svogv';

import { Base } from './base';

export class MachineViewModel extends Base {

  @Display('Machine Name', 10)
  @Required()
  name: string = '';

  @Display('Location', 20)
  @Required()
  location: string = '';


}
