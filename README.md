# Instructions

1. deploy with deploy button ----> [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
1. run `heroku labs:enable runtime-dyno-metadata -a <app name>`
1. click on "Heroku Scheduler" on `https://dashboard.heroku.com/apps/<app name>/resources`
1. configure scheduler to run the command `npm run waker` every 10 minutes
1. repeat this process many times. each time you repeat it, you will have another app running 24x7 burning free dyno hours. you can do some math to figure out how long it will take to burn through all 1000 of your free dyno hours.
