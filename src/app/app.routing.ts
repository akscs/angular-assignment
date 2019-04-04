import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TableComponent } from './components/table/table.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: TableComponent
    }
]);