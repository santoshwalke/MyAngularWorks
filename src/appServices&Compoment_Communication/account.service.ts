import { LoggingService } from "./Logging.Service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService : LoggingService) {}

      addAccount(name : string, status : string) {
        this.loggingService.logStatusChange(status);
        this.accounts.push({name : name , status : status});
      }
      updateService(id : number, status : string) {
        this.loggingService.logStatusChange(status);
        this.accounts[id].status = status;
      }
}