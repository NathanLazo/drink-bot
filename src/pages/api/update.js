// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, ref, update } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = ref(db, "pedidos/" + req.body.id);
  try {
    update(reference, {
      done: true,
    });
    res.status(200).json({ done: true });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
