import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
///컨트롤러를 만든 뒤 라우터를 만들어준다. 그리고 거기에 컨트롤러 사용///
///그 다음 view 파일에 upload 템플릿을 base를 기반으로 생성///
export default videoRouter;
