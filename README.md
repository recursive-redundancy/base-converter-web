# Base Converter (web)
Web browser front end UI for base converter - using dpm-base JavaScript library 
for base conversions "under the hood". Providing base conversion to and from binary (base-2), octal (base-8), decimal (base-10) and hexadecimal (base-16).

# Installation
Clone repo into project directory using git clone command:
```
git clone https://github.com/recursive-redundancy/base-converter-web.git
```
Install npm packages to include dependencies:
```
npm install
```

# Build & Run in Development
Application uses Webpack to build in development on the fly as changes are made, 
and also runs a live-server in parallel for auto updating the web browser 
in real-time with any changes made to web page. Commands are written into 
npm scripts in package.json and can be ran by entering a simple command:
```
npm start
```

# Build for Deployment
Application also uses Webpack to build for deployment. Deploy build differs in that it minifies JS & CSS files and is a one-time process rather than a watching for changes live. Run deploy build by 
entering this command:
```
npm run build
```
The live-server will be served from http://localhost:8080 by default

# Live Example
App is live and available to use and try on my website: http://www.danielmorgan.me/apps/base-converter

# Dependencies
[npm](https://www.npmjs.com/get-npm) - npm makes it easy for JavaScript 
developers to share and reuse code, and makes it easy to update the 
code that you’re sharing, so you can build amazing things.

[dpm-base](https://www.npmjs.com/package/dpm-base) - My npm package which 
contains the underlying logic and code for performing base conversions.

# License
[MIT](./license.txt)