import Controller from '@ember/controller';
import $ from "jquery";

export default Controller.extend({
  actions:{
    registerUser(){
      var fName = $("#fName").val();
      var lName = $("#lName").val();
      var email = $("#email").val();
      var username = $("#username").val();
      var password = $("#password").val();

//store the values in Firebase node called "register"
    var registerUserIntoDB = this.store.createRecord("register",{
        fName : fName,
        lName : lName,
        email : email,
        username: username,
        password : password
      });
      registerUserIntoDB.save();
      fName = $("fName").val("");
      lName = $("lName").val("");
      email = $("email").val("");
      username = $("username").val("");
      password = $("password").val("");

    }
  }
});
