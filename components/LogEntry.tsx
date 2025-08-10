import { Entry, Story } from '@/util/types'
import Markdown from 'react-markdown'
import { Icon } from '@iconify/react'

type LogEntryProps = {
  entry: Entry
}

const LogEntry = ({ entry }: LogEntryProps) => (
  <article className='mb-6 p-4 bg-white rounded-sm shadow-md'>
    <header className='mb-2'>
      <h2 className='text-xl font-semibold' style={{
        color: entry.role === 'Engineer' ? '#d56565' : '#2196f3',
      }}>
        Log {entry.id} – {entry.author}
      </h2>
      <div className='text-sm text-gray-500 mt-2 mb-4'>
        <div className='flex items-center gap-2'>
          <Icon icon='famicons:location-outline' inline />
          {entry.location}
        </div>
        <div className='flex items-center gap-2'>
          <Icon icon='fontisto:date' />
          Stardate {entry.stardate.split('.').join('. ')}
        </div>
      </div>
    </header>
    <div className='content text-justify'>
      <Markdown>{entry.content}</Markdown>
    </div>
  </article>
)

export default LogEntry
