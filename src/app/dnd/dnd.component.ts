import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent {
  private fileList : any = [];
  private invalidFiles : any = [];
  constructor() { }

  onFilesChange(fileList : Array<File>){
    this.fileList = fileList;
  }

  onFileInvalids(fileList : Array<File>){
    this.invalidFiles = fileList;
  }
}