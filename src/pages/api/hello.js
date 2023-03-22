// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, set, ref } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = ref(db, "pedidos/" + req.body.id);
  set(reference, {
    type: "bacacho",
    done: false,
  });
  res.status(200).json({ name: "John Doe" });
}
