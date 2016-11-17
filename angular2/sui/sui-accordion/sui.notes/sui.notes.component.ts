import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-notes',
    templateUrl: './sui.notes.component.html',

})
export class NotesComponent  {
    @Input() notesClass: string;
    @Input() notesStyle: Object = {};

}
