import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  logs: string = '';
  createCode: any;

  constructor() { }

  ngOnInit() {
  }

  

  

  handleChange(e: any) {
    this.logs = e.detail.value;
    
  }

  crearQr(){
    this.createCode = this.logs;
  }

}
