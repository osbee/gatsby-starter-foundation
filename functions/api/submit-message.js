import postgres from "@prisma/orm-postgres/runtime"
import contractJson from "../../src/prisma/contract.json"

let db

function getDb(env) {
  if (!db) {
    db = postgres({
      contractJson,
      url: env.DATABASE_URL,
    })
  }
  return db
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  })
}

export async function onRequestPost(context) {
  const { request, env } = context

  if (!env.DATABASE_URL) {
    console.error("DATABASE_URL is not set")
    return json({ error: "Unable to send. Please check your connection and try again." }, 500)
  }

  let fields
  try {
    fields = await request.json()
  } catch {
    return json({ error: "Invalid request body" }, 400)
  }

  const name = String(fields.name || "").trim()
  const email = String(fields.email || "").trim()
  const subject = String(fields.subject || "").trim()
  const message = String(fields.message || "").trim()

  if (!name || !email || !subject || !message) {
    return json({ error: "All fields are required" }, 400)
  }

  try {
    const created = await getDb(env).orm.public.Message.create({
      name,
      email,
      subject,
      message,
    })
    return json({ ok: true, id: created.id })
  } catch (error) {
    console.error("Failed to save message:", error)
    return json({ error: "Unable to send. Please check your connection and try again." }, 500)
  }
}