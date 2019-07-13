import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalWindowService} from '../../core/services/helpers/modal.window';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Output() addedCategory = new EventEmitter();
    @Output() addedItem = new EventEmitter();

    constructor(private modalService: ModalWindowService) { }

    ngOnInit() {}

    addCategory() {
        this.modalService
            .modalWindowFormCategory()
            .subscribe(result => this.addedCategory.emit(result));
    }

    addItem() {
        this.modalService
            .modalWindowFormItem('Добавить товар')
            .subscribe(result => this.addedItem.emit(result));
    }

}
