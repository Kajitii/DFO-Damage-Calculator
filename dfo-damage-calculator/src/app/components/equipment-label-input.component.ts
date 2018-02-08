import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'equipment-label-input',
    styleUrls: ['./equipment-details.component.less'],
    template:
    `
    <div class="form-col-25"><label for="{{variableName}}">{{displayName}}:</label></div><!--
    --><div class="form-col-25"><input id="{{variableName}}" [(ngModel)]="variableValue" type="number"></div>
    `
})

export class EquipmentLabelInput {
    @Input() variableName: string;
    @Input() displayName: string;
    @Input() variableValue: number;

    constructor() { }

    ngOnInit() {
        //this.equipVariableName = 'equip.' + this.variableName;
    }
}