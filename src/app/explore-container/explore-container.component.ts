import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  users = [];
  joke = null;
  appIsOnline = true;

  constructor(private http: HttpClient) {}
  async ngOnInit() {
    const status: ConnectionStatus = await Network.getStatus();
    this.appIsOnline = status.connected;

    Network.addListener('networkStatusChange', () => {
      console.log('status: ', status);
      this.appIsOnline = status.connected;
    });
  }

  getData() {
    this.http
      .get('https://randomuser.me/api/?results=5')
      .subscribe((result: any) => {
        this.users = result.results;
      });
  }

  getOnlineData() {
    this.http
      .get('https://api.chucknorris.io/jokes/random')
      .subscribe((result: any) => {
        this.joke = result;
      });
  }
}
