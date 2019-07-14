import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDialogComponent } from './shared/components/my-dialog/my-dialog.component';
import { ItemFormModalComponent } from './shared/components/item-form-modal/item-form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryFormModalComponent } from './shared/components/category-form-modal/category-form-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './core/services/api/api-service';
import {ModalWindowService} from './core/services/helpers/modal.window';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule, MatInputModule,
    MatListModule, MatProgressSpinnerModule, MatSelectModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './catalog/sidenav/sidenav.component';
import {ItemsComponent} from './catalog/items/items.component';
import {ToolbarComponent} from './catalog/toolbar/toolbar.component';
import {CategoryService} from './core/services/api/category-service';
import {ItemService} from './core/services/api/item-service';
import {LoaderModalComponent} from './shared/components/loader-modal/loader-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        MyDialogComponent,
        ItemFormModalComponent,
        CategoryFormModalComponent,
        LoaderModalComponent,
        SidenavComponent,
        ItemsComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    providers: [
        ApiService,
        ModalWindowService,
        CategoryService,
        ItemService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        MyDialogComponent,
        ItemFormModalComponent,
        CategoryFormModalComponent,
        LoaderModalComponent
    ]
})
export class AppModule { }
