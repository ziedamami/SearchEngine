import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../display/display.component';


@Component({
  selector: 'Adz-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public ThisDialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  

  ngOnInit() {
    
  }
  close()
  {
    this.ThisDialogRef.close('ok')
  }

}
