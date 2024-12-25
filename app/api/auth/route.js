import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  const { uid, email, name } = await req.json();

  const client = await clientPromise;
  const db = client.db("your-database-name");

  await db.collection("users").updateOne(
    { uid },
    { $set: { email, name } },
    { upsert: true }
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
