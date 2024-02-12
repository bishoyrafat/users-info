import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class LoaderHandlingService {
  constructor(private SharedService: SharedService) {}
  showLading() {
    this.SharedService.isLoading$.next(true);
  }
  hideLading() {
    this.SharedService.isLoading$.next(false);
  }
}
