# Server (Express Lambda)

A simple weather API to demonstrate routes and correct responses tailored to deployment in Lambda.

It uses the serverless framework to automate the creation of AWS configs, deployment and versioning of Lambda and code backup in S3.

## Demo

The code in this repo is [hosted here for you to try.](https://d2wpfdzxndct17.cloudfront.net)

## Getting started

* In order to deploy to AWS you will need credentials in `~./aws/credentials`. 

We will use the profile `siaws` here.
```
[siaws]
aws_region=eu-west-1
aws_access_key_id=xxxx
aws_secret_access_key=xxxx
```

## NPM Scripts

`npm run dev`

Simulates the API and Lambda process locally. Auto reloads on code save.


`npm run deploy:dev`

Creates all AWS setup required (API gateway, Lambda functions, Cloudwatch logging). Updates and versions Lambda function.


`npm run tail:dev`

Tail the remote Lambda Cloudwatch logs so you don't have to navigate the web UI

`npm run metrics:dev`

Receive metrics on invocations of the function, error counts etc.
