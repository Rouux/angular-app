import { isNil } from '../utils/utils';

export class NodeAnimation {
  node: Node;
  duration: number;
  timeout: NodeJS.Timeout;
  interval: NodeJS.Timeout;

  private static ids = 0;
  private _id: number;

  constructor(node: Node, duration: number) {
    this._id = NodeAnimation.ids++;
    this.node = node;
    this.duration = duration;
  }

  clearTimeout(): void {
    if (!isNil(this.timeout)) clearTimeout(this.timeout);
  }

  clearInterval(): void {
    if (!isNil(this.interval)) clearInterval(this.interval);
  }

  clearAll(): void {
    this.clearTimeout();
    this.clearInterval();
  }

  get id(): number {
    return this._id;
  }
}
