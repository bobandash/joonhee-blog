# Blog For A Friend
## Description:
A full-stack web application made for my friend, who can use this blog to post his experiences in Kosovo for the Peace Corps. This was also conveniently done as a project in [The Odin Project]([url](https://www.theodinproject.com/lessons/nodejs-blog-api)). The code is separated into three folders (client-users, client-admin, and server), hosting the user side, admin side, and server backend, respectively. NOTE: The posts may load slowly because the backend is hosted on a free PaaS, which takes time to spin up.

## Live View:
- User: https://joonhee.xyz
- Admin: https://joonheebockadmin.netlify.app/
- Server: https://joonheebock.onrender.com

## Preview:
![image](https://github.com/bobandash/joonhee-blog/assets/74850332/e86f011a-7266-4c00-ad42-f295aea51308)

https://github.com/bobandash/joonhee-blog/assets/74850332/780f2aba-2d7d-4e00-921b-660c96bf5cd5

## Technologies Used:
Front-End:
- React.JS
- TailwindCSS
  
Backend:
- Express, Node.js
- MongoDB
- AWS S3 for image hosting

## Concepts Learned
- Persistent Login using JWT tokens for Admin End
- Implementing Rich Text Editors such as ReactQuill and customizing the Text Editors to use Multer middleware to upload images onto the server
- How to implement queries to limit the data that's fetched

## To-Do:
If I were to come back to this project in the future, I would want to:
- Add more features in the comments section (custom emojis and gifs)
- Add a user login for Joonhee, in case he wants to personally reply to comments and mark his message
- Add Mailchimp integration to inform readers when he makes a new post
- Refactor the project's css to only use tailwind
- Preview Page for Joonhee to see how his page would look like before he hits post



