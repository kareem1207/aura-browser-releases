import { db } from "../../../lib/firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export async function POST(req) {
  try {
    await req.json().catch(() => ({}));
    await updateDoc(doc(db, "stats", "global"), { downloadClicks: increment(1) });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false });
  }
}
