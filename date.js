
exports.getDate =  function getDate(){ // in a function when we are using paraenthesis then we are activating the function
  //so here we are just sending the name of the function in app/js we are using parantesis to activate the function

const todayDate = new Date();
const options = {
  weekday: "long",
  day:"numeric",
  month:"long"
  };

return todayDate.toLocaleDateString("en-US",options);

}

exports.getDay = function(){ // in a function when we are using paraenthesis then we are activating the function

const todayDate = new Date();
const options = {
  weekday: "long",

  };

return todayDate.toLocaleDateString("en-US",options);

}
