import { Component } from '@angular/core';
import {ToastFactoryService, ToastInterface} from 'ng-limeade';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastService: ToastFactoryService) {}

  options = [
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
  ];

  option;

  toastSelection = new FormGroup({
    toastTitle: new FormControl(''),
    toastDescription: new FormControl(''),
    iconTitle: new FormControl('')
  });

  showToast() {
    const toast: ToastInterface = {
      type: this.option,
      title: this.toastSelection.get('toastTitle').value,
      description: this.toastSelection.get('toastDescription').value,
      iconName: this.toastSelection.get('iconTitle').value,
    };
    this.toastService.showToast(toast);
  }
}
