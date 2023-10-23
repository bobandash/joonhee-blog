import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingScreen from '../pages/Home/LandingScreen'
import LatestPosts from '../pages/Home/LatestPosts'
import Notification from '../pages/Home/Notification'
import Meme from '../pages/Home/Meme'

function App() {
  // TO-DO: change to fetch to backend
  const posts = [
    {
      date: "10/14/2023",
      summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam vero pariatur assumenda dolores soluta et tempora fugiat praesentium atque velit, similique itaque nobis aperiam dicta enim officiis in? Soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam vero pariatur assumenda dolores soluta et tempora fugiat praesentium atque velit, similique itaque nobis aperiam dicta enim officiis in? Soluta!",
      name: "Start of Journey",
      image: "http://www.pixelstalk.net/wp-content/uploads/2016/03/Free-download-Pikachu-wallpaper-HD.jpg"
    },
    {
      date: "10/14/2023",
      summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam vero pariatur assumenda dolores soluta et tempora fugiat praesentium atque velit, similique itaque nobis aperiam dicta enim officiis in? Soluta!",
      name: "Start of Journey",
      image: "http://www.pixelstalk.net/wp-content/uploads/2016/03/Free-download-Pikachu-wallpaper-HD.jpg"
    }, 
    {
      date: "10/14/2023",
      summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quibusdam vero pariatur assumenda dolores soluta et tempora fugiat praesentium atque velit, similique itaque nobis aperiam dicta enim officiis in? Soluta!",
      name: "Start of Journey",
      image: "http://www.pixelstalk.net/wp-content/uploads/2016/03/Free-download-Pikachu-wallpaper-HD.jpg"
    },
  ]
  
  return (
    <>
      <Header />
      <LandingScreen />
      <LatestPosts posts = {posts} />
      <Notification />
      <Footer />
{/*       <Meme /> */}
    </>
  )
}

export default App
