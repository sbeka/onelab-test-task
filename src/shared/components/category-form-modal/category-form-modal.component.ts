import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.scss']
})
export class CategoryFormModalComponent {


    form = new FormGroup({
        name: new FormControl('', [ Validators.required, Validators.minLength(5) ])
    });

    get name() { return this.form.get('name'); }


    constructor(public dialogRef: MatDialogRef<any>) {}

    add() {
        console.log(this.form.value);
        // this.dialogRef.close();
    }

}
