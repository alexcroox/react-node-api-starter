# Client (React)

A simple weather temperature fetching app is used to demonstrate the following techniques in React:

* **Routing** - How to navigate between pages using `react-router`
* **Global State** - Managing and sharing a global state between your components that require access to it, using `redux`
* **Forms** - How to create forms with validation and feedback using `formik`
* **Styling** - How to pair css styling with individual components in your application using `styled-components`
* **API** - How to connect to a simple API to fetch and save data.

## Getting started

* Install the Chrome [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* Install the Chrome [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in order to view and debug changes to the global state
* In order to deploy the React or Lambda API you will need AWS credentials in `~./aws/credentials`. 

We will use the profile `siaws` here.
```
[siaws]
aws_region=eu-west-1
aws_access_key_id=xxxx
aws_secret_access_key=xxxx
```

## NPM Scripts

`npm start`

Starts the application in development mode and includes hot module reloading which auto refreshes the page when you make changes.


`npm run build`

Package up the application ready for distribution. It will bundle static assets into the `/build` folder


`npm run deploy:dev`

If your UAT environment is hosted in an S3 bucket you can easily sync the contents of the `/build` folder to a bucket
