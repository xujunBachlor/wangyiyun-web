import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getTitle(){
    return [{
      id: 1,
      name: '发现音乐'
    }, {
      id: 1,
      name: '我的音乐'
    }, {
      id: 1,
      name: '朋友'
    }, {
      id: 1,
      name: '商城'
    }, {
      id: 1,
      name: '音乐人'
    }, {
      id: 1,
      name: '下载客户端'
    }];
  }
}
