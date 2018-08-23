# Instructions

*Replace <app name> with your Heroku app name in all the commands below.*

1. deploy with deploy button ----> [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
1. run this command to enable the dyno metadata labs feature `heroku labs:enable runtime-dyno-metadata -a <app name>`
1. run this command to re-deploy the app, which is required when you enable dyno metadata `curl -v -nX POST "https://api.heroku.com/apps/<app name>/builds" -H "Accept: application/vnd.heroku+json; version=3" -d '{"source_blob": { "url":"https://github.com/crcastle/use-free-hours/archive/master.tar.gz"}}'`
1. click on "Heroku Scheduler" on `https://dashboard.heroku.com/apps/<app name>/resources`
1. configure scheduler to run the command `npm run waker` every 10 minutes
1. repeat this process many times. each time you repeat it, you will have another app running 24x7 burning free dyno hours. you can do some math to figure out how long it will take to burn through all 1000 of your free dyno hours.
