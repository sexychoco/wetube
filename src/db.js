import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (error) => console.log("❌DB ERROR", error);

db.on("error", handleError);
db.once("open", handleOpen); ///connection이 열릴 떄 이벤트가 한 번 발생///
