# Marco's OBA Adventure

## Autor
Tim Terwijn

### Demo:
I will work with Ngrok, the url for the demo is: ... (I will provide the teacher with my URL during the presentation.)

### Description
I can remember the days as a child when I was bored in the beginning of a project. I was always playing with my mouse on the monitor instead of the things I was supposed to do, that is why I decided to make this application to motivate children by make it easier and more fun for them to pick a subject for their project.

### Logo
![Logo](/client/static/img/logo.png)

### Table of contents
* [Install guide](#install-guide)
* [How to use](#how-to-use)
* [What API did I use](#what-api-did-i-use)
* [Client side vs Server side](#client-side-vs-server-side)
* [Service Worker](#service worker)
* [Critical render path](#critical-render-path)
* [Roadmap](#roadmap)

### Install guide
* Clone or download the repository $ git clone https://github.com/TimTerwijn/web-app-from-scratch-1920.git
* Open server folder with VSCode.
* Open terminal en enter npm install.
* Enter npm start in terminal.
* Go to http://localhost:3000/ to play the game.

### How to use
* Use the arrow buttons to move Marco.  
* Press the up arrow to pick a subject, like animals.  
* Then you will see animals instead of subject.  
* Use the arrow buttons again to pick an animal, like dog.  
* Then you will see books of dogs instead of animals.  
* Use the arrow buttons again to pick a book.  
* Then you will see the info of the book instead of the books.  

<!-- What external data source is featured in your project and what are its properties 🌠 -->
### What API did I use
I made use of the OBA Api, you can make 200 request an hour before you have to change the URL of the website to make it work again.  

Example of a record:  
![API](/client/static/img/API.PNG)

### Client side vs Server side
I have splitted the code in two parts. A client folder and a server folder.  
Everything that is inside the client folder is available for the client, because it is on his own pc.
Everything that is inside the server folder is hidden from the client because it runs on one single server pc. (except for the routes, those can return hidden things from the server.) 

### Service Worker
I made a Service worker between the server and the client on the clients pc. This file acts like a between server who can cache visited pages or files. You can also update those pages and files as you see fit. For my application I made the choise to record the first two pages of the application so that a user can visit at a more consistently speed and it also makes it available offline.

### Critical Rendering Path
The first improvement that I made was implementing progressive rendering. This way the page was loaded in this order:  
1. The doctype + HTML
2. The header combined with the css
3. The body with everything exept for the results and the clientside javascript
4. The clientside javascript because the results can take a while to load, especially images.  
![progressive rendering2](/docs/img/progressive-rendering2.png)
5. The results.
6. Finally, close the grid, body and HTML.  

You can see that this gave me a loading speed boost in the image below, because the HTML, CSS and JS files are rendering during the time the server is looking for the results.  
![progressive rendering](/docs/img/progressive-rendering.png)

I also made some other smaller improvements, here you can see all the improvements:
![progressive rendering](/docs/img/progressive-rendering-all.png)

### Roadmap
* Make App Responsive
* Marco jumps after event not before
* Write arrow tutorial to move Marco. 
