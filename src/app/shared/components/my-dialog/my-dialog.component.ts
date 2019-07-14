import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent {

    modalTitle: string;
    modalSubTitle: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.modalTitle = data.title;
        this.modalSubTitle = data.subtitle;
    }

}
