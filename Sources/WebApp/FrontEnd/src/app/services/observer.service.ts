type func = (v: string | number | symbol | any) => void;

/**
 * Implement a simple pub/sub pattern to have components communication without attributes.
 * This class is Singleton, use getInstance to get the global obj.
 */
export class Observer {
	private topics: { [id: string]: func[] } = {};
	private hOP: func;

	public static Id: Readonly<string> = 'observer';

	constructor(s: any) {
		if (s !== void 0) {
			throw new Error("Observer is Singleton, don't call the ctor");
		}
		this.hOP = this.topics.hasOwnProperty;
	}

	private static _instance;

	public static getInstance(): Observer {
		if (!Observer._instance) {
			Observer._instance = new Observer(void 0);
		}
		return Observer._instance;
	}

	subscribe(topic: string, listener: func): { remove: () => void } {
		// Create the topic's object if not yet created
		if (!this.hOP.call(this.topics, topic)) {
			this.topics[topic] = [];
		}
		// Add the listener to queue
		const index = this.topics[topic].push(listener) - 1;
		const self = this;
		// Provide handle back for removal of topic
		return {
			remove() {
				delete self.topics[topic][index];     // kill handler
				self.topics[topic].splice(index, 1);  // shrink array
			}
		};
	}

	publish(topic: string, info: any): void {
		// If the topic doesn't exist, or there's no listeners in queue, just leave
		if (!this.hOP.call(this.topics, topic)) return;
		// Cycle through topics queue, fire!
		this.topics[topic].forEach(item => {
			item.call(item, info);
		});
	}
}
