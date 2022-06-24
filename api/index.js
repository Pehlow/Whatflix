import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
/**
 * @route   GET /movies
 * @desc    Get all movies
 * @access  Public
 * @return  JSON
 */

app.get("/movies", async (req, res) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

/**
 * @route GET /shows
 * @desc Get all shows
 * @access Public
 * @return JSON
 */

app.get("/shows", async (req, res) => {
  const shows = await prisma.show.findMany();
  res.json(shows);
});

/**
 * @route POST /movies
 * @desc Add a movie
 * @access Public
 * @return JSON
 */
app.get("/movies", async (req, res) => {
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
app.get("/shows", async (req, res) => {
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
app.get("/movies/:id", async (req, res) => {
  const movie = await prisma.movie.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json(movie);
});

/**
 * @route DELETE /shows/:id
 * @desc Delete a show
 * @access Public
 * @return JSON
 * @param {string} id
 */
app.get("/shows/:id", async (req, res) => {
  const show = await prisma.show.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json(show);
});

const server = app.listen(3002);
console.log("Server is running on port 3002");
