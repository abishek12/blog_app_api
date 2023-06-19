import Express from "express";

import controller from "./controller.js";
import validateToken from "../Authentication/helper/jwt_validation.js";

const appRoutes = Express.Router();

appRoutes.get("/", controller.fetchPosts);
appRoutes.get("/:id", controller.fetchPost);
appRoutes.post("/", validateToken, controller.createPost);
appRoutes.put("/", validateToken, controller.updatePost);
appRoutes.delete("/", validateToken, controller.deletePost);

export default appRoutes;
