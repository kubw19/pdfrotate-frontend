import { Component, OnInit, Input, Inject } from '@angular/core';
import { ServerCommunicationService } from '../server-communication.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileTransform } from '../Models/FileTransform';
import { ServerResponse } from '../Models/ServerResponse';

@Component({
  selector: 'app-file-box',
  templateUrl: './file-box.component.html',
  styleUrls: ['./file-box.component.scss']
})
export class FileBoxComponent implements OnInit {

  @Input() file: FileTransform
  public file_upload_progress: number = 0
  public download_url: string
  public invalid_file: boolean = false
  constructor(private server: ServerCommunicationService) { }

  ngOnInit() {
    console.log(this.file.file.name)
      this.server.rotateFile(this.file.file, this.file.rotation).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.file_upload_progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.file_upload_progress = 100
            this.download_url = event.body.download_url
          }
        }, error =>{
          this.invalid_file = true
        }
      )

  }

  downloadFile():void {
    if(this.download_url){
      window.location.href = this.download_url
    }
  }

}
