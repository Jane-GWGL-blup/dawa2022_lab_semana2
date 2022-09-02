// Solo rutas del usuario
import { Router} from "express";
import * as Controller from "./controller";
/**
 * Cuando usamos export
 * import { findAll } from "./controller"
 * export default
 * import findAll from "./controller""
 */
const userRouter = Router();

userRouter.route("/").get(Controller.findAll)
userRouter.route("/:id").get(Controller.findOne)
userRouter.route("/").post(Controller.create)
userRouter.route("/:id").put(Controller.update)
userRouter.route("/:id").delete(Controller.remove)

export default userRouter
