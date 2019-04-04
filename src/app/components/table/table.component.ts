import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { FetchPostsService, PostInfo } from '../../shared/services/fetch-posts.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'display-posts',
    templateUrl: './table.component.html',
    providers: [ FetchPostsService ],
    styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit {
    source: LocalDataSource;
    rawJSONData: Array<any>;

    settings = {
        columns: {
          title: {
            title: 'Title',
            width: '35%'
          },
          url: {
            title: 'URL',
            width: '35%'
          },
          author: {
            title: 'Author',
            width: '12%'
          },
          createdAt: {
            title: 'Date of creation'
          }
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        noDataMessage: ""
      };

    constructor(
        private fetchPostsService : FetchPostsService,
        public ngxSmartModalService: NgxSmartModalService
    ) { 
        this.source = new LocalDataSource();
    }

    ngOnInit() {
        this.fetchPostsService.fetchPosts()
        .subscribe( 
            ( posts => {
                this.rawJSONData = posts.hits;
                const arrPostInfo = posts.hits.map ( post => ({
                    title: post.title,
                    url: post.url,
                    author: post.author,
                    createdAt: post.created_at
                    } as PostInfo )
                );
                console.log("All posts", arrPostInfo);
                this.source.load(arrPostInfo);
            }
        ));
    }

    ngAfterViewInit() {
        this.ngxSmartModalService.getModal('modal').onAnyCloseEvent.subscribe( modal => {
          modal.removeData();
        });
      }

    onUserRowSelect(event): void {
        const modalData = this.rawJSONData.reduce( ( result, post ) => {
            if (post.created_at === event.data.createdAt) { result = post }
            return result
          }, null)
        this.ngxSmartModalService.setModalData( modalData, 'modal');
    }

}

