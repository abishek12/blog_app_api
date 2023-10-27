import Express from "express";

import controller from "./controller.js";
import validateToken from "../Authentication/helper/jwt_validation.js";

const appRoutes = Express.Router();

appRoutes.get("/", controller.fetchPosts);
appRoutes.get("/:id", controller.fetchPost);
appRoutes.post("/", controller.createPost);
appRoutes.put("/", controller.updatePost);
appRoutes.delete("/", controller.deletePost);

export default appRoutes;
