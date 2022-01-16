import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ String }],
  meta: {
    views: Number,
    ratings: Number,
  },
});

///Video 모델을 구성하는 단계 => (model의 이름,데이터의 형태인 Schema)///

const Video = mongoose.model("Video", videoSchema);
export default Video;
