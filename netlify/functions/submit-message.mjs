import postgres from '@prisma/orm-postgres/runtime'
import contractJson from '../../src/prisma/contract.json' with { type: 'json' }

let db

function getDb() {
  if (!db) {
    db = postgres({
      contractJson,
      url: process.env.DATABASE_URL,
    })
  }
  return db
}

const headers = { 'content-type': 'application/json' }

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set')
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Unable to send. Please check your connection and try again.' }),
    }
  }

  let fields
  try {
    fields = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) }
  }

  const name = String(fields.name || '').trim()
  const email = String(fields.email || '').trim()
  const subject = String(fields.subject || '').trim()
  const message = String(fields.message || '').trim()

  if (!name || !email || !subject || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'All fields are required' }) }
  }

  try {
    const created = await getDb().orm.public.Message.create({
      name,
      email,
      subject,
      message,
    })
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, id: created.id }) }
  } catch (error) {
    console.error('Failed to save message:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Unable to send. Please check your connection and try again.' }),
    }
  }
}