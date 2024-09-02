# Blog For A Friend
A full-stack web application made for my friend, who can use this blog to post his experiences in Kosovo for the Peace Corps. This was also conveniently done as a project in [The Odin Project]([url](https://www.theodinproject.com/lessons/nodejs-blog-api)). The code is separated into three folders (client-users, client-admin, and server), hosting the user side, admin side, and server backend, respectively. NOTE: The posts may load slowly because the backend is hosted on a free PaaS, which takes time to spin up.

## Technologies Used:
Front-End:
- React.JS
- TailwindCSS
  
Backend:
- Express, Node.js
- MongoDB
- AWS S3 for image hosting

## Live View:
- User: https://joonhee.xyz
- Admin: https://joonheebockadmin.netlify.app/
- Server: https://joonheebock.onrender.com

## Preview:
![image](https://github.com/bobandash/joonhee-blog/assets/74850332/e86f011a-7266-4c00-ad42-f295aea51308)

https://github.com/bobandash/joonhee-blog/assets/74850332/780f2aba-2d7d-4e00-921b-660c96bf5cd5

## Getting Started
To get a local copy up and running follow these simple steps.
### Prerequisites
Before beginning setup, you would need to create an AWS account with [AWS keys](https://medium.com/@jannden/how-to-get-aws-access-keys-81cad0366418) and an [S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) and a [MongoDB database](https://www.mongodb.com/resources/products/fundamentals/create-database)

### Steps to run on your local machine
1. Clone the repository
    ```sh
    git clone https://github.com/bobandash/joonhee-blog.git
    ```
2. Open three instances of your terminal, one for the client-admin (the admin site where you're able to write posts), one for the client-users (where you're able to view posts), and one for the server, which contains the logic for fetching posts and writing posts to the backend
    ```sh
    cd joonhee-blog/client-admin
    cd joonhee-blog/client-users
    cd joonhee-blog/server
    ```
-  **The following steps (3 - 7) will reference the server terminal.**
3. Install all the dependencies on the server's package.json
    ```sh
    npm install
    ```
4. Create an .env file at the server directory
    ```sh
    touch .env
    ```
5. Copy and paste the .env.sample contents into the .env file
6. With the .env file you created, populate the file with your database & AWS credentials, admin email and password you want to set, and secret token to sign JWT
7. Start up the server on your local machine (this uses nodemon to listen to any server changes), and take note of the localhost port
    ```sh
    npm run devStart
    ```
-  **The following steps (8 - 12) will reference the client-admin terminal.**
8. Install all the dependencies with a package manager of your choice
    ```sh
    npm install
    ```
9. Create an .env file at the client-admin directory
    ```sh
    touch .env
    ```
10. Copy and paste the .env.sample contents into the .env file
11. With the .env you created, add the localhost port of the server
12. Start the application, and open the link to the client-admin
    ```sh
    npm run dev
    ```
-  **The following steps (13 - 17) will reference the client-users terminal.**
13. Install all the dependencies with a package manager of your choice
    ```sh
    npm install
    ```
14. Create an .env file at the client-admin directory
    ```sh
    touch .env
    ```
15. Copy and paste the .env.sample contents into the .env file
16. With the .env you created, add the localhost port of the server
17. Start the application, and open the link to the client-users
    ```sh
    npm run dev
    ```

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



