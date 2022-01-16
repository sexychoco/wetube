import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    ratings: { type: Number, default: 0, required: true },
  },
});

///Video 모델을 구성하는 단계 => (model의 이름,데이터의 형태인 Schema)///

const Video = mongoose.model("Video", videoSchema);
export default Video;
