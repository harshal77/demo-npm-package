**Important**: This code is written in Angular CLI 12** and higher.

#Part 1: Steps to create npm package

 1. Make sure you have an NPM account if not check it out here https://www.npmjs.com/
 2. First we have to create angular project using command 
 
 ```
   ng g new project_name 
  ```
  
 3. Then we have to create angular library for which we have to crate package in this example I have created simple
 button package. We have to use create library command
 ```
   cd project_name
   ng g library button 
  ```
 3. After creating library we can see another project folder created in our project directory which is having its own angular configuration.
 4. We can verify in our main package.json file which contians project object which is have 2 projects now first our main project with type application and 
 second our button project which is having type library.
 5. Before publishing our first package we have to crate a build of button library using ng build package_name 
  ```
   ng build button
   ng g library button 
  ```
 
 6. You have to login with your NPM credentials using npm login command. After entering this command you have to add your username password and register email id.
 Then you will recived a otp over your mail.
 ```
  npm login
  ```
 7. After successfully login you have navigate to your library build folder and then publish your package using npm publish.
 

#Part 2: Steps to run

2.1. Clone the starterkit for this tutorial:

   https://github.com/harshal77/demo-npm-package.git --branch master

2.2. Move into the project directory and install the dependencies 

  ```
    cd demo-package
    npm i
    
  ```

2.3. Start the project (Port 4200) 
    ```
    ng serve --o
    ```
2.4. For more info
https://www.npmjs.com/


#part 3 Things that might helps you
 Package name must be unique if package is already exist you have to choose another name.Or else you can add your username before the package name in
 package.json file of your library. Then you can create build and instead of npm publish command you have to add one more paramter like npm publish --access=public
 beacause when you add your username before package name NPM will consider that package is private package by default and private packages are paid in NPM.

 How to update the NPM package version.
 Simply update your code.Then update version in package.json. And follow above steps again.


 For more do follow me on LinkedIn
 https://www.linkedin.com/in/harshal-shirke-691354129/
 
 
 #Iauro #NPM #Angular
