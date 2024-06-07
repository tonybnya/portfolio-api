const express = require("express");
const router = express.Router();

const {
  createSingleProject,
  readAllProjects,
  readSingleProject,
  updateSingleProject,
  deleteSingleProject,
} = require("../controllers/project.controller");

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: CREATE a new project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: The created project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 */
router.post("/projects", createSingleProject);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: READ all the projects
 *     responses:
 *       200:
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.get("/projects", readAllProjects);

/**
 * @swagger
 * /api/project/{id}:
 *   get:
 *     summary: READ a specific project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The project ID
 *     responses:
 *       200:
 *         description: A single project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 */
router.get("/project/:id", readSingleProject);

/**
 * @swagger
 * /api/project/{id}:
 *   put:
 *     summary: UPDATE an existing project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: The updated project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 */
router.put("/project/:id", updateSingleProject);

/**
 * @swagger
 * /api/project/{id}:
 *   delete:
 *     summary: DELETE a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The project ID
 *     responses:
 *       200:
 *         description: Project deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message
 */
router.delete("/project/:id", deleteSingleProject);

module.exports = router;
