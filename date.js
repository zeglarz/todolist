
function getDate() {

  var today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return today.toLocaleDateString('en-US', options);
};

function getDay() {

  var today = new Date();

  var options = {
    weekday: 'long'

  };
  return today.toLocaleDateString('en-US', options);
};

module.exports = { getDate, getDay };
