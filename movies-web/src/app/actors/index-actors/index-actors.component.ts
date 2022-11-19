import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { IActorDto } from '~/app/actors/actors.model';
import { ActorsService } from '~/app/actors/actors.service';
import { ErrorhandlerService } from '~/app/common/services/errorhandler.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.scss']
})
export class IndexActorsComponent implements OnInit, OnDestroy {

  actors: IActorDto[] | any;
  columnsToDisplay = ['name', 'actions'];
  totalAmountOfRecords: any;
  currentPage = 1;
  pageSize = 5;

  private subscriptions = new Subscription()

  constructor(private actorsService: ActorsService, private errorHandlerService: ErrorhandlerService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.errorHandlerService.errorEvent$.subscribe(this.onError.bind(this)));

    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private onError(error: any) {
    console.log('Received Error at IndexActorsComponent::onError(). Error: ', error);
  }

  loadData() {
    this.actorsService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<IActorDto[]>) => {
        this.actors = response.body;
        this.totalAmountOfRecords = response.headers?.get("totalAmountOfRecords");
      });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.loadData();
  }

  delete(id: number) {
    this.actorsService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

}
