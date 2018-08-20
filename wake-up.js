const fetch = require('node-fetch');

if (process.env.HEROKU_APP_NAME) {
  fetch(`http://${process.env.HEROKU_APP_NAME}.herokuapp.com`)
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(err => console.error(err));
} else {
  console.log("Cannot determine heroku app name. Maybe you need to run `heroku labs:enable runtime-dyno-metadata -a <app name>`?");
}
