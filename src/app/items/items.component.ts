import {Component, Input, OnInit} from '@angular/core';
import {ModalWindowService} from '../../core/services/helpers/modal.window';
import {ItemService} from '../../core/services/api/item-service';
import {ItemModel} from '../../core/interfaces';


@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

    displayedColumns: string[] = ['name', 'price_purchase', 'price_sale', 'action'];
    @Input() items: ItemModel[] = [];

    constructor(
        private modalService: ModalWindowService,
        private itemService: ItemService
    ) {}

    ngOnInit() {}

    deleteItem(id: string, name: string) {
        this.modalService
            .modalWindow(`Точно удалить товар "${name}" ?`, '')
            .subscribe(result => {
                if (result) {
                    this.itemService.del(id).subscribe(() => {
                        this.itemService.list().subscribe((res: any) => this.items = res);
                    });
                }
            });
    }

    editItem(idItem: string) {
        this.modalService
            .modalWindowFormItem('Изменить товар', idItem)
            .subscribe(result => {
                if (result) {
                    this.itemService.list().subscribe((res: any) => this.items = res);
                }
            });
    }

}
