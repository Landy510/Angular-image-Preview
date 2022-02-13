import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../api/files.service';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  fileName = '';

  filePath = '';

  targetFile = {
    type: '',
    name: ''
  }

  dataList: Array<any> = [];

  uploadProgress: number;

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
  }

  onGetFilesClick(): void {
    this.filesService.getFiles()
      .subscribe(res => {
        this.dataList = res;
      })
  }

  upload(): void {
    this.filesService.uploadFiles(this.targetFile)
      .subscribe(() => {
        this.onGetFilesClick();
        this.filePath = '';
      })
  }

  onFileSelected(event:any): void {
    const file:File = event.target.files[0];
    if(file) {
      this.fileName = file.name;
      this.targetFile = {
        type: file.type,
        name: file.name
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.filePath = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  onDeleteFileClick(id:string):void {
    this.filesService.deleteFile(id)
      .subscribe(() => {
        this.onGetFilesClick();
      })
  }
}
