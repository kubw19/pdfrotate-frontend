import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { };

  ngOnInit(): void {

    this.title.setTitle("Obracanie plików PDF, za darmo, trwale, bez znaków wodnych")

    this.meta.addTags([
      { name: "description", content: "Jak obrócić plik PDF? Za pomocą tego narzędzia możesz to zrobić szybko i za darmo. Narzędzie pozwalające bezpłatnie i szybko obrócić dowolne plii PDF online." }
    ])
  }
}
