import { Router } from "express";
import * as pingControler from "./controlers/ping";

export const mainRouter = Router()

mainRouter.get('/ping', pingControler.ping)