// Packages Import Start
import { express, dotenv, cors, bodyParser } from "./packages.js";
// Packages Import End

// Configs Import Start
import { connectDatabase } from "./configs/db.js";

// Configs Import End

// Routes Import Start
// import {
//   authRoutes,

// } from "./routes/routes.js";
// Routes Import End

// Basic Inits Start
dotenv.config();
connectDatabase();
const app = express();
// Basic Inits End

// Middlewares Start
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middlewares End

// Routes Start
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// Routes End

// Server Start
const PORT = process.env.PORT || 5000;
// Server End

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
