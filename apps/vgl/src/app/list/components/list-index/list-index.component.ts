import { Component, OnInit } from '@angular/core';
import { ListFetcherService } from '../../../shared/services/list-fetcher.service';
import { tap } from 'rxjs/operators';
import { IList } from '../../../shared/interfaces/list.interface';
import { IPaginatedResults } from '../../../shared/interfaces';

@Component({
  selector: 'vgl-list-index',
  templateUrl: './list-index.component.html',
  styleUrls: ['./list-index.component.scss'],
})
export class ListIndexComponent implements OnInit {

  items: IPaginatedResults<IList>;
  constructor(private listFetcher: ListFetcherService) {}

  ngOnInit(): void {
    this.fetchLists();
  }

  fetchLists(page = 1) {
    this.listFetcher.getLists(page).pipe(
      tap((data: IPaginatedResults<IList>) => {
        this.items = {
          ...data,
          results: data.currentPage === 1 ? [...data.results] : [...this.items.results, ...data.results]
        }
      })
    ).subscribe()
  }
}
