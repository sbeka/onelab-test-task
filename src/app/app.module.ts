import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MyDialogComponent } from '../shared/components/my-dialog/my-dialog.component';
import { ItemFormModalComponent } from '../shared/components/item-form-modal/item-form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryFormModalComponent } from '../shared/components/category-form-modal/category-form-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from '../core/services/api/api-service';
import {CategoryService} from '../core/services/api/category-service';
import {ItemService} from '../core/services/api/item-service';

@NgModule({
    declarations: [
        AppComponent,
        MyDialogComponent,
        ItemFormModalComponent,
        CategoryFormModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        CategoryService,
        ItemService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        MyDialogComponent,
        ItemFormModalComponent,
        CategoryFormModalComponent
    ]
})
export class AppModule { }
