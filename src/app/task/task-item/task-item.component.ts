import {Component, OnInit, Input, Inject, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

    @Input() item;
    @Input() avatar;
    @Output() taskClick = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
        this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
    }

    onItemClick() {
        this.taskClick.emit();
    }

    onCheckboxClick(event: Event) {
        event.stopPropagation();
    }

}