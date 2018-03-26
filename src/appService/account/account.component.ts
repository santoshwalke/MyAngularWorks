import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers : [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService : LoggingService, 
              private accountService : AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    //this.loggingService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
