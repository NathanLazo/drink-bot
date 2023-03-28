// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, ref, get, query, limitToLast } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = query(ref(db, "pedidos/"), limitToLast(1));
  get(reference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.status(200).json(snapshot.val());
      } else {
        res.status(400).json({ error: "No data available" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
}
