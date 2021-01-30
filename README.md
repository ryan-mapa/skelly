# Skelly skeleton

This is a rails-react-redux app skeleton. 
Notes:
- Configured for use with a PostgreSQL database

To use this skeloton do the following:

- Clone down the repo
- Change folder named 'skelly' to your app name
- Use `command + shift + f` to find all instances of 'skelly' in project
- replace all instances with your app name (maintain capitalization)
- rename skelly.jsx file to your app name (case sensitive for webpack config entry file)

Run the following for setup:
  - `bundle install`
  - `rails db:setup`
  - `npm install`

To test app in development run the following:
  - `rails s`
  - `npm start` (in separate terminal window)
  - open http://localhost:3000/#/
