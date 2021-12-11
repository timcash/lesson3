const { PSDB } = require('planetscale-node')
const conn = new PSDB('main')

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const [rows] = await conn.query('select * from events')
            res.status(200).json(rows)
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: err.toString() })
        }
    }
    if(req.method === 'POST') {
        try {
            const { title, created_at } = req.body
            const [rows] = await conn.query('INSERT INTO events (title, created_at) VALUES (?, ?)', [title, created_at])
            res.status(200).json(rows)
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: err.toString() })
        }
    }
}

