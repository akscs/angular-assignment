import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

    beforeEach(async() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                AppComponent
            ]
        });
    });

    it('creates the component', async(() => {
        let fixture = TestBed.createComponent(AppComponent);

        expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    }));

});