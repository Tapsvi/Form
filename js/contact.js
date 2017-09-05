
      var pageBody = document.getElementsByTagName('body')[0];
      pageBody.style.backgroundColor = '#000';
      pageBody.style.height ='130vh';
      pageBody.style.position = 'relative';
      var formBox = document.getElementsByTagName('div')[0];
      formBox.style.backgroundColor = '#fff';
      formBox.style.height = '118vh';
      formBox.style.position = 'absolute';
      formBox.style.bottom = '0px';
      formBox.style.margin = '5% 20% 5% 20%';
      formBox.style.padding = '2%';
      formBox.style.border = '2px solid rgba(0,0,0,0.7)';
      formBox.style.boxShadow = '4px 0px 83px #fff';
      function validateFName(){
              var fname = document.getElementById('fname').value;
              if(fname == ""){
                //Throw an error if first name doesnot match with the pattern
                document.getElementById('fname').classList.add("error");
                document.getElementById('formLabel1').style.color = "red";
                //document.getElementById('mandatory1').classList.add("asterisk");
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip1');
                var textnode = document.createTextNode("Please enter your first name!");  
                // document.getElementById('fname').value = "";   
                toolcase.appendChild(textnode);
                document.getElementById('toolbox1').appendChild(toolcase);
              }
              else if(fname.search(/^[a-zA-Z]+$/) === -1){
                 //Throw an error if first name doesnot match with the pattern
                document.getElementById('fname').classList.add("error");
                document.getElementById('formLabel1').style.color = "red";
                //document.getElementById('mandatory1').classList.add("asterisk");
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip1');
                var textnode = document.createTextNode("Your firstname can only consist of alphabets.");  
                // document.getElementById('fname').value = "";   
                toolcase.appendChild(textnode);
                document.getElementById('toolbox1').appendChild(toolcase);
              }
              else if(fname.length < 3){
                 //Throw an error if first name doesnot match with the pattern
                document.getElementById('fname').classList.add("error");
                document.getElementById('formLabel1').style.color = "red";
                document.getElementById('mandatory1').classList.add("asterisk");
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip1');
                var textnode = document.createTextNode("Your firstname must consists of atleast 3 characters!");  
                // document.getElementById('fname').value = "";   
                toolcase.appendChild(textnode);
                document.getElementById('toolbox1').appendChild(toolcase);
              }
              else{
                document.getElementById('fname').classList.remove("error");
                document.getElementById('formLabel1').style.color = "black";
                //document.getElementById('mandatory1').classList.remove("asterisk");
                document.getElementById('toolbox1').innerHTML ="";
              }
      }
      function validatelName(){
              var lname = document.getElementById('lname').value;
              if(lname == ""){
                //Throw an error if last name doesnot match with the pattern
                document.getElementById('lname').classList.add("error");
                document.getElementById('formLabel2').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip2');
                var textnode = document.createTextNode("Please enter a valid lastname!");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox2').appendChild(toolcase);
              }
              else if(lname.search(/^[a-zA-Z]+$/) === -1){
                //Throw an error if last name doesnot match with the pattern
                document.getElementById('lname').classList.add("error");
                document.getElementById('formLabel2').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip2');
                var textnode = document.createTextNode("Your lastname can only consist of alphabets.");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox2').appendChild(toolcase);  
              }
              else{
                document.getElementById('lname').classList.remove("error");
                document.getElementById('formLabel2').style.color = "black";
                document.getElementById('toolbox2').innerHTML ="";
              }
      }
      function validateAge(){
              var age = document.getElementById('age').value;
              // age.search(/^\S[0-9]{0,1}$/) == -1
              if(age == ""){
                //Throw an error if age doesnot match with the pattern
                document.getElementById('age').classList.add("error");
                document.getElementById('formLabel3').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip3');
                var textnode = document.createTextNode("Please enter your age!.");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox3').appendChild(toolcase);
              }
              else if(age < 18 || age > 65){
                //Throw an error if age doesnot match with the pattern
                document.getElementById('age').classList.add("error");
                document.getElementById('formLabel3').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip3');
                var textnode = document.createTextNode("You must be between 18 - 65yrs old to enroll!.");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox3').appendChild(toolcase);  
              }
              else{
                document.getElementById('age').classList.remove("error");
                document.getElementById('formLabel3').style.color = "black";
                document.getElementById('toolbox3').innerHTML ="";
              }
      }
      function validateDesignation(){
              var designation = document.getElementById('designation').value;
              if(designation.search(/^[a-zA-Z\s]*$/) === -1){
                //Throw an error if designation doesnot match with the pattern
                document.getElementById('designation').classList.add("error");
                document.getElementById('formLabel4').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip4');
                var textnode = document.createTextNode("Designation can only consist of alphabets.");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox4').appendChild(toolcase);
              }
              else if(designation == ""){
                //Throw an error if designation doesnot match with the pattern
                document.getElementById('designation').classList.add("error");
                document.getElementById('formLabel4').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip4');
                var textnode = document.createTextNode("Please enter your designation"); toolcase.appendChild(textnode);
                document.getElementById('toolbox4').appendChild(toolcase);
              }
              else{
                document.getElementById('designation').classList.remove("error");
                document.getElementById('formLabel4').style.color = "black";
                document.getElementById('toolbox4').innerHTML = "";
              }
      }
      function validateEmail(){
              var email = document.getElementById('email').value;
              if(email.search(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/) === -1) {
                //Throw an error if email doesnot match with the pattern
                document.getElementById('email').classList.add("error");
                document.getElementById('formLabel5').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip5');
                var textnode = document.createTextNode("Please enter a valid email address!");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox5').appendChild(toolcase);
              }
              else{
                document.getElementById('email').classList.remove("error");
                document.getElementById('formLabel5').style.color = "black";
                document.getElementById('toolbox5').innerHTML = "";
              }
      }
      function validateContact(){
              var contact = document.getElementById('contact').value;
              if(contact.search(/^[0-9]+$/) === -1){
                //Throw an error if contact doesnot match with the pattern
                document.getElementById('contact').classList.add("error");
                document.getElementById('formLabel6').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip6');
                var textnode = document.createTextNode("Please enter only numbers!");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox6').appendChild(toolcase);
              }
              else if(contact.length != 10){
                //Throw an error if contact doesnot match with the pattern
                document.getElementById('contact').classList.add("error");
                document.getElementById('formLabel6').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip6');
                var textnode = document.createTextNode("Please enter a valid 10 digit mobile number!");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox6').appendChild(toolcase);
              }
              else{
                document.getElementById('contact').classList.remove("error");
                document.getElementById('formLabel6').style.color = "black";
                document.getElementById('toolbox6').innerHTML ="";
              }
      }
      function validateAddress(){
              var address = document.getElementById('address').value;
              if(address == ""){
                //Throw an error if address doesnot match with the pattern
                document.getElementById('address').classList.add("error");
                document.getElementById('formLabel7').style.color = "red";
                var toolcase = document.createElement('span');
                toolcase.setAttribute('class', 'tooltip7');
                var textnode = document.createTextNode("Please enter an address to contact you!");  
                toolcase.appendChild(textnode);
                document.getElementById('toolbox7').appendChild(toolcase);
              }
              else{
                document.getElementById('address').classList.remove("error");
                document.getElementById('formLabel7').style.color = "black";
                document.getElementById('toolbox7').innerHTML = "";
              }
      } 
      // function validate(){
      //         var fname = document.getElementById('fname').value;
      //         var lname = document.getElementById('lname').value;
      //         var age = document.getElementById('age').value;
      //         var designation = document.getElementById('designation').value;
      //         var email = document.getElementById('email').value;
      //         var contact = document.getElementById('contact').value;
      //         var address = document.getElementById('address').value;
      //         if(fname == " " || lname == " " || designation == " " || age == " " || email == " " || contact == " " || address == " "){
      //           var toolcase = document.createElement('span');
      //           toolcase.setAttribute('class', 'verifyMessage');
      //           var textnode = document.createTextNode("Please fill in all the details!");  
      //           toolcase.appendChild(textnode);
      //           document.getElementById('verification').appendChild(toolcase);
      //           return false;
      //         }
      // } 
      function validate() {
              if (!validateFName() || !validatelName() || !validateAge() || !validateDesignation() || !validateEmail() ||!validateContact() || !validateAddress()) {
              //alert('Please fix errors to submit.');
              var toolcase = document.createElement('span');
              toolcase.setAttribute('class', 'verifyMessage');
              var textnode = document.createTextNode("Please fix errors to submit!");  
              toolcase.appendChild(textnode);
              document.getElementById('verification').appendChild(toolcase);
              return false;
              }
              var toolcase = document.createElement('span');
              toolcase.setAttribute('class', 'verifyMessage');
              var textnode = document.createTextNode("Submitted successfully!");  
              toolcase.appendChild(textnode);
              document.getElementById('verification').appendChild(toolcase);
              return true;
//              document.getElementById('verification').replace('Submitted successfully!');

      }
      // function validate()
      // {
      
      //    if( document.getElementById('fname').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your first name!"); 
      //       document.getElementById('fname').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
      //    if( document.getElementById('lname').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your last name!"); 
      //       document.getElementById('lname').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
      //    if( document.getElementById('age').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your age!"); 
      //       document.getElementById('age').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
         
      //    if( document.getElementById('designation').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your designation!"); 
      //       document.getElementById('designation').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
      //    if( document.getElementById('email').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your email!"); 
      //       document.getElementById('email').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
      //    if( document.getElementById('contact').value == "" )
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your contact number!"); 
      //       document.getElementById('contact').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
         
         
      //    if( document.getElementById('address').value == "")
      //    {
      //       var toolcase = document.createElement('span');
      //       toolcase.setAttribute('class', 'verifyMessage');
      //       var textnode = document.createTextNode("Please provide your address!"); 
      //       document.getElementById('address').focus() ;
      //       toolcase.appendChild(textnode);
      //       document.getElementById('verification').appendChild(toolcase);
      //       return false;
      //    }
      //    var toolcase = document.createElement('span');
      //    toolcase.setAttribute('class', 'verifyMessage');
      //    var textnode = document.createTextNode("Submitted Successfully!"); 
      //    toolcase.appendChild(textnode);
      //    document.getElementById('verification').appendChild(toolcase);
      //    var el = document.getElementById("contactForm");
      //    e1.classList.remove("bounceInDown");
      //    document.getElementById("contactForm").reset();
      //    return( true );
      // }