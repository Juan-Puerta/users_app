import { Router } from "express";
import {
  get_git_users,
  add_git_user,
  delete_git_user,
} from "../controllers/git_user.controllers.js";

const router = Router();

router.get("/git_users", get_git_users);
router.post("/git_users", add_git_user);
router.delete("/git_users/:id", delete_git_user);

export default router;
