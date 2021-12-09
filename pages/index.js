import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { useState } from 'react'

function fetcher(url) {
  return fetch(url).then((r) => r.json())
}

// Return a list of events as react elements
function EventsInDatabase() {
  const { data, error } = useSWR('/api/events', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (<div className={styles.container}>

    {data.map((event) => (
      <div key={event.event_id} className={styles.event}>
        <div>
          {event.event_id}
        </div>
        <div>
          {event.title}
        </div>
        <div>
          {event.created_at.split('T')[0]}
        </div>
      </div>
    ))}
  </div>
  )
}

function CreateEvent() {
  const [title, setTitle] = useState('')

  const [date, setDate] = useState('')
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        fetch('/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,

            date
          })
        })
      }
      }>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Database 3</title>
        <meta name="description" content="Database lesson 3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Database lesson 3
        </h1>
        <EventsInDatabase></EventsInDatabase>
        <CreateEvent></CreateEvent>
      </main>
    </div>
  )
}
