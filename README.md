# Todo List Manager

Todo List Manager is a web application used to track your todo tasks online.
This application uses Firebase backend and Firebase Real Time DB to store your todo tasks and build with React and Redux.
Visit this application at [https://todo-app-372c1.web.app/](https://todo-app-372c1.web.app/)

## Setup and run the app

Follow these steps to setup and run the quickstart:

 1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).
 2. In the Firebase console, enable Anonymous authentication on your project by doing: **Authentication > SIGN-IN METHOD > Anonymous > Enable > SAVE**
 3. In the Firebase console, enable RealTime Database on your project by clicking **Create Database** in the **RealTime Database** section of the console and answering all prompts.
     1. Select testing mode for the security rules
 4. Either Fork or Clone this project and open the folder in CLI.
 5. Install all the dependencies using the `npm install` command.
 6. In this project, open httpConfig.js file inside service directory.
 7.  Add your firebase RealTime DB endpoint for baseURL in httpConfig File.
 8.  As indicated, open [http://localhost:3000](http://localhost:3000) in your browser and try out the app.
 
 ## How to use this app
 1. Initially register your account using your Email.
 2. Login with registered email to use this app.
 3. Add your first task in the input field and Click add Task Button.
 4. Your added task is displayed below your Add Task card component.
 5. After completing the task, you remove that task by clicking the tick icon at the end of each task.

## How the app look like
![register](https://user-images.githubusercontent.com/49742736/126063337-9aca8986-4dea-44f8-83c6-ab2ad930a207.PNG)

![login](https://user-images.githubusercontent.com/49742736/126063338-0ff4b8aa-327b-4dc3-a748-4ebe761ebff9.PNG)

![initial image](https://user-images.githubusercontent.com/49742736/126063343-38daffde-357b-444e-aa9d-79d73509dd3d.PNG)

![after task addition](https://user-images.githubusercontent.com/49742736/126063348-d6875b56-4179-4437-a7de-787c5ccd44f6.PNG)

