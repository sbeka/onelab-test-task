import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {CategoryService} from '../../../core/services/api/category-service';

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


    constructor(
        public dialogRef: MatDialogRef<any>,
        private categoryService: CategoryService
    ) {}

    add() {
        this.categoryService
            .add(this.form.value)
            .subscribe(res => {
                this.dialogRef.close(true);
            });
    }

}
