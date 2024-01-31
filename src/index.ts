import express, {Request, Response} from 'express'
import { getStreamData, musicData, getFeed } from '../utils/innertube/client';

const app = express()


app.use(express.json())

// * Middleware *

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Routes *

const musicController = async (req: Request, res: Response) => {
  const query = req.params.query
  const data = await musicData(query)

  res.json({data}).status(200)
}

const streamController = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = await getStreamData(id)

  res.json({data}).status(200)
}

const homeController = async (req:Request, res:Response) => {
  const data = await getFeed()
  res.json({data}).status(200)
}


// add routes here
app.get("/music/:query", musicController)
app.get("/music/stream/:id", streamController)
app.get("/", homeController)

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`
    🚀 Server ready at: http://localhost:${port}
  `),
)
