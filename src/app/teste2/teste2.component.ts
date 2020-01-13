import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
}) 
export class Teste2Component implements OnInit {


  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '844940046342-jqh382agmk8api6sife05gi8veckk770.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email', 
        access_type : 'offline',
        prompt: 'consent',
        fetch_basic_profile: true,
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        console.log("-------------------------")
        console.log(profile)
        console.log("-------------------------")
        console.log(googleUser)
        let aaaa = profile.reloadAuthResponse();
        console.log("213412341234");
        console.log(aaaa);


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
  


  constructor() { }

  ngOnInit() {
    this.googleInit();
  }

}


