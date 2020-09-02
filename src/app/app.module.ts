import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxFilesizeModule } from 'ngx-filesize';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolComponent } from './tool/tool.component';
import { DndDirective } from './dnd.directive';
import { FileBoxComponent } from './file-box/file-box.component';
import { TruncatePipe } from './limitto.pipe'
import { CookieLawModule } from 'angular2-cookie-law';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    DndDirective,
    FileBoxComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    MatProgressBarModule,
    NgxFilesizeModule,
    CookieLawModule,
    CommonModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
