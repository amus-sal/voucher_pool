import app from './app'
import connectDB from "./config/db"

const port = parseInt(process.env.PORT || '3000')
connectDB()
const server = new app().Start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default server;