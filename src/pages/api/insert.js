// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../utils/firebase";
import { getDatabase, ref, push, set } from "firebase/database";

export default function handler(req, res) {
  const db = getDatabase(app);
  const reference = ref(db, "pedidos/");
  try {
    const newPedidoRef = push(reference);
    const newPedidoId = newPedidoRef.key;
    const newPedidoData = {
      id: newPedidoId,
      type: req.body.type,
      done: false,
      valve: req.body.valve,
      bomb: req.body.bomb,
    };
    set(newPedidoRef, newPedidoData);
    res.status(200).json({ message: "all done" });
  } catch (error) {
    res.status(400).json({ error: error, message: "Error mi pandx" });
  }
}
