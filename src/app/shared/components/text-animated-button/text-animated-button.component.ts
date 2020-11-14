import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AnimateDivTextService } from '../../services/animate-div-text.service';

@Component({
  selector: 'app-text-animated-button',
  templateUrl: './text-animated-button.component.html',
  styleUrls: ['./text-animated-button.component.scss'],
  providers: [AnimateDivTextService],
})
export class TextAnimatedButtonComponent implements AfterViewInit {
  public static readonly ANIMATION_CHARACTER_LENGTH = 10;

  @Input() otherText: string;
  @Input() onEnterDuration = 800;
  @Input() onLeaveDuration = 500;

  private initialText: string;
  private _text: string;
  private _content: HTMLDivElement;

  constructor(private _animateTextService: AnimateDivTextService) {}

  @ViewChild('content', { static: true })
  set content(content: ElementRef<HTMLDivElement>) {
    this._content = content.nativeElement;
  }

  ngAfterViewInit(): void {
    this.text = this._content.textContent;
  }

  onMouseEnter(): void {
    this._playOnMouseEnterTextAnimation();
  }

  onMouseLeave(): void {
    this._playOnMouseLeaveTextAnimation();
  }

  @Input() set text(text: string) {
    this.initialText = text;
    this._text = text;
  }

  get text(): string {
    return this._text;
  }

  private _playOnMouseEnterTextAnimation(): void {
    this._animateTextService.animate(
      this._content,
      this.otherText,
      TextAnimatedButtonComponent.ANIMATION_CHARACTER_LENGTH,
      this.onEnterDuration
    );
  }

  private _playOnMouseLeaveTextAnimation(): void {
    this._animateTextService.animate(
      this._content,
      this.initialText,
      TextAnimatedButtonComponent.ANIMATION_CHARACTER_LENGTH,
      this.initialText !== this.otherText ? this.onLeaveDuration : 0
    );
  }
}
