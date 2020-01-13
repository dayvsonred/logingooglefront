import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OauthGoogleService } from '../oauthgoogle.service'; 

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  auth2: any;
  openGoogleLogin;

  @ViewChild('loginRef') loginElement: ElementRef;

  constructor(private api: OauthGoogleService ) { 

  }

  ngOnInit() {
    this.googleSDK();
  }




  prepareLoginButton() {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        let a = profile.grantOfflineAccess
        //YOUR CODE HERE
        console.log("-------------------------")
        console.log(profile)
        console.log("-------------------------")
        console.log(googleUser)

        setTimeout(() => {
          
          let aaaa = googleUser.reloadAuthResponse();
          console.log("213412341234");
          console.log(aaaa);

          
        }, 4000);
        // let aaaa = googleUser.reloadAuthResponse();
        // console.log("213412341234");
        // console.log(aaaa);
        console.log("!!!!!!!!!!!!!!!!")
        let scop = googleUser;
        console.log(scop.Zi.scope)
        // let bbbb = googleUser.grantOfflineAccess('https://www.googleapis.com/auth/userinfo.profile').then(  
        //   (res)=>{
        //     console.log("213412341234");
        //     console.log(res);
        //   }
          

        // );
        // console.log("213412341234");
        // console.log(bbbb);
        
 
 
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }


  successCallback(result) {
    console.log("It succeeded with " + result);
  }



  googleSDK() {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '844940046342-jqh382agmk8api6sife05gi8veckk770.apps.googleusercontent.com',
          //cookiepolicy: 'single_host_origin',
          immediate : true,
          response_type : 'code',
          scope: 'profile email',
          access_type : 'offline',
          prompt: 'consent',
          includegrantedscopes : true,
        });
        this.prepareLoginButton();
      });
    }
 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
 
  }



  getURL(){
    console.log("get url")

    
    this.api.getUrl().subscribe(data => {
            console.log(data);
            let d; d = data;
            console.log(d.url);

            this.openGoogleLogin = window.open(d.url, "iniciando google", "width=400px;height:700px" );
            
            


          });

          

          // setInterval(() => {
          //   console.log("windo")
          //   console.log(this.openGoogleLogin);
          // }, 3000);

  }





      getURL2(){
        console.log("get url2")
    
        this.api.getUrl2().subscribe(data => {
                console.log(data);


              });
          }
 

}


  