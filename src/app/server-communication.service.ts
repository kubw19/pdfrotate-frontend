import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ServerResponse } from './Models/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {

  constructor(private http: HttpClient) { }

  rotateFile(file: File, angle: Number): Observable<HttpEvent<ServerResponse>>{
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('angle', angle.toString());
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let options = { headers: headers, observe: 'events' as const, reportProgress: true}
    return this.http.post<ServerResponse>(environment.upload_pdf_url, formData, options)
  }
}
