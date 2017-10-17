const FbApi = {
    
    loadApi(){
        
        window.fbAsyncInit = function() {
        const FB = window.FB;
        FB.init({
          appId            : '168084200278385',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.10'
        });
        FbApi.getStatus()
        FbApi.changeStatus()
        
        
        //FB.AppEvents.logPageView();
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));    
    },
    
    getStatus(){
        window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //console.log(response.status);
            FbApi.changeloginStatus(response)
        }
        else {
            //console.log(response.status);
            FbApi.changeloginStatus(response)
  
        }
      });
    },
    
    changeStatus(){
        window.FB.Event.subscribe('auth.statusChange',function(response){
            if(response.status === 'connected'){
                console.log('changeStatus(): Conneted');
                FbApi.getApi(response)
            }else{
                console.log('changeStatus(): NOT conneted');
                FbApi.clearData()
            }
        })
    },
    
    getApi(response){
        let node = response.authResponse.userID;
        let accessToken = response.authResponse.accessToken;
        window.FB.api(node,'get',{fields: 'id,name,email,feed{picture,message},picture{url},cover,photos{picture,link,name},friends{name,id,picture}',access_token : accessToken},function(response){
            console.log(response);
            FbApi.changeState( response )
        })
    },
    
    changeloginStatus( response ){
        this.setState({
            loginStatus : response.status
        })
    },
    
    changeState( response ){
        this.setState({
            data : response,
            feed : response.feed.data,
            photos : response.photos.data,
            friends : response.friends.data,
        })
    },
    
    clearData(){
        this.setState({
            data : [],
            feed : [],
            photos : [],
            friends : [],
        })
    }
    
    
    
    
    
    
    
    
    
    
    
}
export default FbApi;