import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ItemFormModalComponent} from '../../../shared/components/item-form-modal/item-form-modal.component';
import {CategoryFormModalComponent} from '../../../shared/components/category-form-modal/category-form-modal.component';
import {MyDialogComponent} from '../../../shared/components/my-dialog/my-dialog.component';
import {LoaderModalComponent} from '../../../shared/components/loader-modal/loader-modal.component';


@Injectable()
export class ModalWindowService {

    constructor(private dialog: MatDialog) {}
    private loader: MatDialogRef<any>;

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
            title,
            subtitle
        };
        const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    presentLoader() {
        this.loader = this.dialog.open(LoaderModalComponent);
    }

    dismissLoader() {
        if (this.loader) {
            this.loader.close();
        }
    }

}
