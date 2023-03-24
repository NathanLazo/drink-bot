// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, ref, push } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = ref(db, "pedidos/");
  try {
    push(reference, {
      type: req.body.type,
      done: false,
      valve: req.body.valve,
      bomb: req.body.bomb,
    });
    res.status(200).json({ message: "all done" });
  } catch (error) {
    res.status(400).json({ error: error, message: "Error mi pandx" });
  }
}
