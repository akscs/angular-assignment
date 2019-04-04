import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { APP_ROUTING } from './app.routing';

import { TableComponent } from './components/table/table.component';
import { MessagesComponent } from './components/error-message/error-message.component';
import { HttpErrorHandler } from './shared/services/http-error-handler.service';
import { ErrorMessageService } from './shared/services/error-message.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        Ng2SmartTableModule,
        NgxSmartModalModule.forRoot(),
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        TableComponent,
        MessagesComponent
    ],
    providers: [
        NgxSmartModalService,
        HttpErrorHandler,
        ErrorMessageService,
      ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}