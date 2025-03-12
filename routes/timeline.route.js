const express = require("express");
const router = express.Router();

const {
  createSingleTimeline,
  readAllTimelines,
  readSingleTimeline,
  updateSingleTimeline,
  deleteSingleTimeline,
} = require("../controllers/timeline.controller");

/**
 * @swagger
 * /api/timelines:
 *   post:
 *     summary: CREATE a new timeline entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Timeline'
 *     responses:
 *       201:
 *         description: The created timeline
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Timeline'
 */
router.post("/timelines", createSingleTimeline);

/**
 * @swagger
 * /api/timelines:
 *   get:
 *     summary: READ all the timeline entries
 *     responses:
 *       200:
 *         description: A list of timeline entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Timeline'
 */
router.get("/timelines", readAllTimelines);

/**
 * @swagger
 * /api/timeline/{id}:
 *   get:
 *     summary: READ a specific timeline entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The timeline entry ID
 *     responses:
 *       200:
 *         description: A single timeline entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Timeline'
 */
router.get("/timeline/:id", readSingleTimeline);

/**
 * @swagger
 * /api/timeline/{id}:
 *   put:
 *     summary: UPDATE an existing timeline entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The timeline entry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Timeline'
 *     responses:
 *       200:
 *         description: The updated timeline entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Timeline'
 */
router.put("/timeline/:id", updateSingleTimeline);

/**
 * @swagger
 * /api/timeline/{id}:
 *   delete:
 *     summary: DELETE a timeline entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The timeline entry ID
 *     responses:
 *       200:
 *         description: Timeline deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message
 */
router.delete("/timeline/:id", deleteSingleTimeline);

module.exports = router;
