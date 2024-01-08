import React from "react";
import '../style/login.css'
import '../JS/loginApp'

function MaterialContainer() {
   return (
      <div>
         <h1>Welcome to Attendance System</h1>
         <div class="materialContainer">
            <div class="boxMargin">


               <div class="box">
                  <div class="title">LOGIN</div>
                  <div class="input">
                     <label for="name">Username</label>
                     <input type="text" name="name" id="name" />
                     <span class="spin"></span>
                  </div>

                  <div class="input">
                     <label for="pass">Password</label>
                     <input type="password" name="pass" id="pass" />
                     <span class="spin"></span>
                  </div>

                  <div class="button login">
                     <button><span>GO</span> <i class="fa fa-check"></i></button>
                  </div>

                  <a href="www.google.com" class="pass-forgot">Forgot your password?</a>

               </div>
            </div>

            <div class="overbox">
               <div class="material-button alt-2"><span class="shape"></span></div>

               <div class="title">REGISTER</div>

               <div class="input">
                  <label for="regname">Username</label>
                  <input type="text" name="regname" id="regname" />
                  <span class="spin"></span>
               </div>

               <div class="input">
                  <label for="regpass">Password</label>
                  <input type="password" name="regpass" id="regpass" />
                  <span class="spin"></span>
               </div>

               <div class="input">
                  <label for="reregpass">Repeat Password</label>
                  <input type="password" name="reregpass" id="reregpass" />
                  <span class="spin"></span>
               </div>

               <div class="button">
                  <button><span>NEXT</span></button>
               </div>


            </div>

         </div>
      </div>
   );
}

export default MaterialContainer;
