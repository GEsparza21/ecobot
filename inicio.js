
  
    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };
      function init() {
        gapi.load('auth2', function() {
          /* Ready. Make a call to gapi.auth2.init or some other API */
        });
      }
          function handleCredentialResponse(response) {
             // decodeJwtResponse() is a custom function defined by you
             // to decode the credential response.
             const responsePayload = parseJwt(response.credential);
        
             console.log("ID: " + responsePayload.sub);
             console.log('Full Name: ' + responsePayload.name);
             console.log('Given Name: ' + responsePayload.given_name);
             console.log('Family Name: ' + responsePayload.family_name);
             console.log("Image URL: " + responsePayload.picture);
             console.log("Email: " + responsePayload.email);
          }
      
          function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            console.log('User signed out.');
          });
        }