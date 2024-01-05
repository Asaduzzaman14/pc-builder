import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function api(req, res) {
  connectMongoDB();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const employees = await User.find({});

        return res.status(200).json({
          success: true,
          data: employees,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    case "POST":
      try {
        const employees = await User.create(req.body);
        return res.status(201).json({
          success: true,
          data: employees,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
