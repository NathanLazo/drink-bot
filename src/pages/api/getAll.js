// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, ref, get } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = ref(db, "pedidos/");
  get(reference)
    .then(snapshot => {
      if (snapshot.exists()) {
        return res.status(200).json(snapshot.val());
      } else {
        return res.status(400).json({ error: "No data available" });
      }
    })
    .catch(error => {
      return res.status(500).json({ error: error });
    });
}
