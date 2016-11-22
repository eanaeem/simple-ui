import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './sui.util/sui.util.filter.pipe';
import { OrderByPipe } from './sui.util/sui.util.orderBy.pipe';
import { VisiblePipe } from './sui.util/sui.util.visible.pipe';
import { PagingPipe } from './sui.util/sui.util.paging.pipe';
import { DeletePipe } from './sui.util/sui.util.delete.pipe';

import { NavigationComponent } from './sui.navigation/sui.navigation.component';
import { RatingComponent } from './sui.rating/sui.rating.component';
import { TableComponent } from './sui.table/sui.table.component';
import { ModalComponent } from './sui.modal/sui.modal.component';
import { ConfirmModalComponent } from './sui.modal/sui.confirm.modal.component';
import { FormComponent } from './sui.form/sui.form.component';
import { AddPipe } from './sui.util/sui.util.add.pipe';
import { InputComponent } from './sui.form/sui.input.component';
import { AlertComponent } from './sui.alert/sui.alert.component';
import { PanelComponent } from './sui.panel/sui.panel.component';
import { NotesComponent } from './sui.notes/sui.notes.component';
import { QuotesComponent } from './sui.quotes/sui.quotes.component';
import { ProgressComponent } from './sui.progress/sui.progress.component';
import { CardComponent } from './sui.card/sui.card.component';
import { BadgeComponent } from './sui.badge/sui.badge.component';
import { TagComponent } from './sui.tag/sui.tag.component';
import { ListComponent } from './sui.list/sui.list.component';
import { ButtonComponent } from './sui.button/sui.button.component';

import { AccordionComponent } from './sui.accordion/sui.accordion.component';
import { AccordionGroupComponent } from './sui.accordion/sui.accordion.group.component';
import { AccordionToggleComponent } from './sui.accordion/sui.accordion.toggle.component';
import { ButtonGroupComponent } from './sui.button/sui.button.group.component';


@NgModule({
    declarations: [
        AddPipe,
        DeletePipe,
        FilterPipe,
        OrderByPipe,
        PagingPipe,
        VisiblePipe,

        AccordionComponent,
        AccordionGroupComponent,
        AccordionToggleComponent,
        AlertComponent,
        BadgeComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        FormComponent,
        InputComponent,
        ListComponent,
        ModalComponent,
        NavigationComponent,
        NotesComponent,
        PanelComponent,
        ProgressComponent,
        ConfirmModalComponent,
        QuotesComponent,
        RatingComponent,
        TableComponent,
        TagComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AddPipe,
        DeletePipe,
        FilterPipe,
        OrderByPipe,
        PagingPipe,
        VisiblePipe,

        AccordionComponent,
        AccordionGroupComponent,
        AccordionToggleComponent,
        AlertComponent,
        BadgeComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardComponent,
        FormComponent,
        InputComponent,
        ListComponent,
        ModalComponent,
        NavigationComponent,
        NotesComponent,
        PanelComponent,
        ProgressComponent,
        ConfirmModalComponent,
        QuotesComponent,
        RatingComponent,
        TableComponent,
        TagComponent,
    ]
})
export class SuiModule { }
