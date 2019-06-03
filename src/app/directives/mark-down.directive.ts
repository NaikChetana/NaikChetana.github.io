import { Directive, ElementRef, Renderer2, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMarkDown]'
})
export class MarkDownDirective {
  @Input() plainText
  @Output() output = new EventEmitter()

  ngOnChanges(change: SimpleChanges) {

    if (change.plainText) {
      this.el.nativeElement.value = this.plainText
      this.markup(this.plainText)
    }
  }

  markup(newtext: string) {
    let text = newtext

    let boldMatch: RegExp = new RegExp("\\*\\*([a-zA-Z0-9_\\-\\. ]+)\\*\\*");
    let italicsMatch: RegExp = new RegExp("\\/\\/([a-zA-Z0-9_\\-\\. ]+)\\/\\/");
    let urlMatch: RegExp = new RegExp("\\[\\[([a-zA-Z0-9_\\-\\.\\/\\: ]+)\\|([a-zA-Z0-9_\\-\\. \\!]+)\\]\\]")
    let result
    while ((result = boldMatch.exec(text)) && result !== null) {
      text = text.replace(boldMatch, result[1].bold())
    }
    while ((result = italicsMatch.exec(text)) && result !== null) {
      text = text.replace(italicsMatch, result[1].italics())
    }
    while ((result = urlMatch.exec(text)) && result !== null) {
      text = text.replace(urlMatch, result[2].link(result[1]))
      console.log(result);
    }

    this.output.emit(text)
  }

  insertMarkup(type) {
    // cursor start location
    var start = this.el.nativeElement.selectionStart
    // cursor end location
    var end = this.el.nativeElement.selectionEnd
    // entire text content
    var text = this.el.nativeElement.value


    var before = text.substring(0, start)
    var after = text.substring(end, text.length)
    let newText = '';

    
    switch (type) {
      case 'bold': newText = "**text**"; break;
      case 'italics': newText = "//text//"; break;
      case 'url': newText = "[[url|name]]"; break;
    }

    this.el.nativeElement.value = before + newText + after
    this.el.nativeElement.selectionStart = start + 2
    this.el.nativeElement.selectionEnd = start + newText.length - 2
    this.el.nativeElement.focus()
    this.markup(this.el.nativeElement.value)
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.el.nativeElement);

    // <div>
    const div = document.createElement("DIV");
    div.className = "card";

    // <ul>
    const ul = document.createElement("UL");
    ul.classList.add("list-group", "list-group-flush");

    // <div>
    //    <ul>
    div.appendChild(ul);

    // <li>
    const li = document.createElement("LI");
    li.className = "list-group-item";

    // <div>
    //    <ul>
    //       <li>
    ul.appendChild(li);

    // Bold button
    const bold = document.createElement("BUTTON");
    bold.setAttribute('id', 'bold')
    bold.classList.add("btn", "btn-light")
    li.appendChild(bold);
    bold.addEventListener('click', () => { this.insertMarkup('bold') })
    // B Icon
    const bold_icon = document.createElement("I");
    bold_icon.classList.add("fas", "fa-bold")
    bold.appendChild(bold_icon);

    // Italics button
    const italics = document.createElement("BUTTON");
    italics.setAttribute('id', 'italics')
    italics.classList.add("btn", "btn-light")
    li.appendChild(italics);
    italics.addEventListener('click', () => { this.insertMarkup('italics') })
    // I Icon
    const italics_icon = document.createElement("I");
    italics_icon.classList.add("fas", "fa-italic")
    italics.appendChild(italics_icon);


    // URL button
    const url = document.createElement("BUTTON");
    url.setAttribute('id', 'url')
    url.classList.add("btn", "btn-light")
    li.appendChild(url);
    url.addEventListener('click', () => { this.insertMarkup('url') })
    // url Icon
    const url_icon = document.createElement("I");
    url_icon.classList.add("fas", "fa-link")
    url.appendChild(url_icon);


    this.renderer.insertBefore(this.el.nativeElement.parentNode, div, this.el.nativeElement.nextSibling);

  }

}
