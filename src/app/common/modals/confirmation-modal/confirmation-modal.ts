import { Component, Inject,Injectable} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface dialogData{
  title: string,
  message:string,
  action:any
}

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root'
})
export class ConfirmationModal {
  dialog1:dialogData;
constructor(public dialog: MatDialog) {
  this.dialog1={ title: "", message:"",action:""}
}

show(title:string, message:string, promise:any): void {
    this.dialog1.title =title;
    this.dialog1.message=message;
    this.dialog1.action=promise;
    
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '350px',
      data: this.dialog1

    });

dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        promise();
      }
    });
  }
}

@Component({
  selector: 'confirmation-modal',
  templateUrl: 'confirmation-modal.html',
})
export class ConfirmationDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:dialogData) { }

  
}
