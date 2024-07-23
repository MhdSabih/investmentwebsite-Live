import { connect } from "mongoose";

const uri =
  "mongodb+srv://mohammadsabihka68:SwfT9eWSGkn73lcf@cluster0.txihnua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connection = () => {
  connect(uri)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("MongoDB Connection Error: ", err));
};

export default connection;
