import { Injectable } from '@angular/core';
import { NodeAnimation } from '../models/node-animation';
import { arrayOfNumbers, isNil, randomString, replaceAt } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class AnimateDivTextService {
  private static _animationMap = new Map<number, NodeAnimation>();

  clearAnimation(id: number): void {
    const animation = AnimateDivTextService._animationMap.get(id);
    if (!isNil(animation)) {
      animation.clearAll();
      AnimateDivTextService._animationMap.delete(id);
    }
  }

  animate(node: Node, final: string, maxLength = 10, duration = 1000): number {
    if (duration === 0) node.textContent = final;
    if (this._hasAnimationByNode(node)) {
      this.clearAnimation(this._findAnimationByNode(node).id);
    }
    const animation = new NodeAnimation(node, duration);
    this._toRandomText(animation, maxLength);

    animation.timeout = setTimeout(() => {
      animation.clearAll();
      this._toFinalText(animation, final);
    }, this._halfDuration(animation));

    AnimateDivTextService._animationMap.set(animation.id, animation);
    return animation.id;
  }

  private _hasAnimationByNode(node: Node): boolean {
    return this._findAnimationByNode(node) !== undefined;
  }

  private _findAnimationByNode(node: Node): NodeAnimation | undefined {
    for (const animation of AnimateDivTextService._animationMap.values()) {
      if (animation.node.isEqualNode(node)) return animation;
    }
    return undefined;
  }

  private _toRandomText(animation: NodeAnimation, maxLength: number): void {
    animation.clearAll();
    const { node } = animation;

    while (node.textContent.length <= maxLength) {
      node.textContent += ' ';
    }
    const indexesToReplace: number[] = arrayOfNumbers(node.textContent.length);

    animation.interval = setInterval(() => {
      this._randomizeOneCharacterOfTextContent(indexesToReplace, node);
    }, this._halfDuration(animation) / maxLength);
  }

  private _toFinalText(animation: NodeAnimation, final: string): void {
    const { node } = animation;
    const indexesToReplace: number[] = arrayOfNumbers(node.textContent.length);
    animation.interval = setInterval(() => {
      this._updateOneCharacterOfFinalText(animation, indexesToReplace, final);
    }, this._halfDuration(animation) / node.textContent.length);

    animation.timeout = setTimeout(() => {
      node.textContent = final;
      animation.clearAll();
    }, this._halfDuration(animation));
  }

  private _updateOneCharacterOfFinalText(
    animation: NodeAnimation,
    indexes: number[],
    final: string
  ): void {
    const { node } = animation;
    if (indexes.length !== 0) {
      const index = indexes.pop();
      node.textContent = replaceAt(
        node.textContent,
        index,
        final.charAt(index) || ' '
      );
    } else {
      animation.clearAll();
    }
  }

  private _randomizeOneCharacterOfTextContent(
    indexes: number[],
    node: Node
  ): void {
    const text = node.textContent;
    if (indexes.length !== 0) {
      const index = indexes.pop();
      node.textContent = replaceAt(node.textContent, index, randomString(1));
    } else {
      const index = Math.floor(Math.random() * text.length);
      node.textContent = replaceAt(node.textContent, index, randomString(1));
    }
  }

  private _halfDuration(animation: NodeAnimation): number {
    return animation.duration / 2;
  }
}
