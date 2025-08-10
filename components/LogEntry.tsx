import { Entry, Story } from '@/util/types'
import Markdown from 'react-markdown'

type LogEntryProps = {
  entry: Entry
}

const LogEntry = ({ entry }: LogEntryProps) => (
  <article className='mb-6 p-4 bg-white rounded-sm shadow-md'>
    <header className='mb-2'>
      <h2 className='text-xl font-semibold'>
        Log {entry.id} – {entry.author}
      </h2>
      <p className='text-sm text-gray-500 mt-2 mb-4'>
        {entry.location} | Stardate {entry.stardate}
      </p>
    </header>
    <p className='content text-justify'>
      <Markdown>{entry.content}</Markdown>
    </p>
  </article>
)

export default LogEntry
