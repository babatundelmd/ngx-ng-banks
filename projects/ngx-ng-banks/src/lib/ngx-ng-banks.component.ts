import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgBanks } from './data/ng-banks';
import { Bank } from './model/bank.model';

@Component({
  selector: 'lib-ngx-ng-banks',
  templateUrl: './ngx-ng-banks.component.html',
  styleUrls: ['./ngx-ng-banks.component.css'],
  providers: [NgBanks],
})
export class NgxNgBanksComponent implements OnInit {
  private _isShowListBankLogos = false;

  set isShowBankLogos(value: boolean) {
    this._isShowListBankLogos = value;
    this.changeDetectorRef.markForCheck();
  }
  get isShowBankLogos(): boolean {
    return this._isShowListBankLogos;
  }

  allNgBanks: Array<any> = [];
  selectedBank
  customLabels: Bank;
  // @Input() selectedBank: string;

  @Input() showLogos = true;
  @Input() showLabels = true;
  @Input() showArrow = true;
  @Output() changedBankLogo = new EventEmitter<string>();
  @ViewChild('selectLogos') selectLogosElementRef: ElementRef;

  outsideClickSelectLogos = () => {};

  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private ngBankData: NgBanks
  ) {}

  ngOnInit() {
    this.ngBankData.allNgBanks.forEach((bnk) => {
      const bankDetails: Bank = {
        name: bnk[0],
        bankLogo: bnk[1],
      };

      this.allNgBanks.push(bankDetails);
    });
  }
  getBankName(bank: string): string {
    return this.customLabels && this.customLabels[bank]
      ? this.customLabels[bank]
      : bank
      ? bank
      : '';
  }

  public toggleListBankLogos(): void {
    if (this._isShowListBankLogos) {
      this.closeListBankLogos();
    } else {
      this.openListBankLogos();
    }
  }

  private openListBankLogos(): void {
    this._isShowListBankLogos = true;
    this.subscribeOutsideClickSelectLogos();
  }

  private closeListBankLogos(): void {
    this._isShowListBankLogos = false;
    this.unsubscribeOutsideClickSelectLogos();
  }

  public changeSelectedNgBanks(value: any) {
    this.selectedBank = value;
    this.closeListBankLogos();
    this.changedBankLogo.emit(this.selectedBank.name);
  }

  private subscribeOutsideClickSelectLogos(): void {
    this.outsideClickSelectLogos = this.renderer.listen(
      'document',
      'click',
      (event) => {
        if (!this.selectLogosElementRef.nativeElement.contains(event.target)) {
          this.closeListBankLogos();
        }
      }
    );
  }

  private unsubscribeOutsideClickSelectLogos(): void {
    if (this.outsideClickSelectLogos) {
      this.outsideClickSelectLogos();
      this.outsideClickSelectLogos = undefined;
    }
  }
}
