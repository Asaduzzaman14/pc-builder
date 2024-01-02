import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export default async function handler(req, res) {
  try {
    const { name, email, password } = await req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return res.status(200).json({ message: "User registered." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while registering the user!" });
  }
}
