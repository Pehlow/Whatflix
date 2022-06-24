import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
/**
 * @route   GET /movies
 * @desc    Get all movies
 * @access  Public
 * @return  JSON
 */

app.get("/movies", async (_req, res) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

/**
 * @route GET /shows
 * @desc Get all shows
 * @access Public
 * @return JSON
 */

app.get("/shows", async (_req, res) => {
  const shows = await prisma.show.findMany();
  res.json(shows);
});

/**
 * @route POST /movies
 * @desc Add a movie
 * @access Public
 * @return JSON
 */
app.post("/movies", async (req, res) => {
  prisma.movie.create({
    data: req.body,
  });
  res.json(req.body);
});

/**
 * @route POST /shows
 * @desc Add a show
 * @access Public
 * @return JSON
 */
app.post("/shows", async (req, res) => {
  prisma.show.create({
    data: req.body,
  });
  res.json(req.body);
});

/**
 * @route DELETE /movies/:id
 * @desc Delete a movie
 * @access Public
 * @return JSON
 * @param {string} id
 */
app.delete("/movies/:id", async (req, res) => {
  try {
    const show = await prisma.movie.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(show);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ error: "Specified movie not found and could not be deleted" });
  }
});

/**
 * @route DELETE /shows/:id
 * @desc Delete a show
 * @access Public
 * @return JSON
 * @param {string} id
 */
app.delete("/shows/:id", async (req, res) => {
  try {
    const show = await prisma.show.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(show);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ error: "Specified show not found and could not be deleted" });
  }
});

const server = app.listen(3002);
console.log("Server is running on port 3002");
