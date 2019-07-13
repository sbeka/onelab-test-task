import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ItemFormModalComponent} from '../../../shared/components/item-form-modal/item-form-modal.component';
import {CategoryFormModalComponent} from '../../../shared/components/category-form-modal/category-form-modal.component';
import {MyDialogComponent} from '../../../shared/components/my-dialog/my-dialog.component';


@Injectable()
export class ModalWindowService {

    constructor(private dialog: MatDialog) {}

    modalWindowFormItem(title: string, idItem: string = null): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: idItem,
            title
        };
        const dialogRef = this.dialog.open(ItemFormModalComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    modalWindowFormCategory(): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(CategoryFormModalComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    modalWindow(title: string, subtitle: string): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title,
            subtitle
        };
        const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

}
