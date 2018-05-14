import DS from 'ember-data';

export default DS.Model.extend({
  fName : DS.attr("string"),
  lName : DS.attr ("string"),
  email : DS.attr("string"),
  username : DS.attr("string"),
  password : DS.attr("string")
});
