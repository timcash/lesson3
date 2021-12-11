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

    {data.map(event => (
      <div key={event.event_id} className={styles.event}>
        <div>
          {event.event_id}
        </div>
        <div>
          {event.title}
        </div>
        <div>
          {event.created_at}
        </div>
      </div>
    ))}
  </div>
  )
}

// Lesson 3: Add a form to create a new event
// Sends a new event to the database
function CreateEvent() {
  const [title, setTitle] = useState('')

  const [created_at, setCreated_at] = useState('')
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
            created_at
          })
        })
      }
      }>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={created_at} onChange={(e) => setCreated_at(e.target.value)} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  )
}

// Lesson 4: delete an entry from the database by id
// Delete an event from the database
function DeleteEvent(props) {
  const [id, setId] = useState('')  // id of the event to delete
  const [title, setTitle] = useState('')  // title of the event to delete
  const [created_at, setCreated_at] = useState('')  // created_at of the event to delete


  return (
    <div> 
      <form onSubmit={(e) => {
        e.preventDefault()
        fetch(`/api/events/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            created_at
          })
        })
      }
      }>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={created_at} onChange={(e) => setCreated_at(e.target.value)} />
        <button type="submit">Delete Event</button>
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
