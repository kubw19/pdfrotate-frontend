import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../server-communication.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileTransform } from '../Models/FileTransform';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  constructor() { }

  public rotation: number = 90

  public files: FileTransform[] = []

  public file_too_big: boolean = false

  ngOnInit() {
  }

  rotationSettingsChanged(settings): void {
    this.rotation = settings.value
  }

  fileBrowseHandler(files) {
    this.file_too_big = false;
    this.files = []
    for (let file of files) {
      if (file.size < 30 * 1000 * 1000) {
        this.files.push(new FileTransform(file, this.rotation))
      }
      else{
        this.file_too_big = true;
      }
    }
  }
}

