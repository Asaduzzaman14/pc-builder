import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function Post(req, res) {
  try {
    await connectMongoDB();
    const { email } = await req.body;

    console.log(email, "eeee");

    const user = await User.findOne({ email }).select("_id");
    return res.status(201).json({ message: "User registered.", user });
  } catch (error) {
    console.log(error);
  }
}
