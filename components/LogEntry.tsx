import { Entry } from '@/util/types'
import Markdown from 'react-markdown'
import { Icon } from '@iconify/react'

type LogEntryProps = {
  entry: Entry
}

const colors = {
  Engineer: '#d56565',
  Investigator: '#2196f3'
}

const LogEntry = ({ entry }: LogEntryProps) => (
  <article className='mb-6 p-4 bg-white rounded-sm shadow-md'>
    <header className='mb-2'>
      <h2 className='text-2xl text-zinc-500 font-semibold'>Log {entry.id}</h2>
      <h3
        className='text-xl font-semibold my-2 flex items-center'
        style={{
          color: colors[entry.role as keyof typeof colors],
        }}
      >
        {entry.author}
        <div className='ml-2 text-xs p-2 rounded-full text-center uppercase'
        style={{
          background: colors[entry.role as keyof typeof colors] + '15',
        }}>{entry.role}</div>
      </h3>
      <div className='text-sm text-gray-500 mt-2 mb-4'>
        <div className='flex items-center'>
          <Icon icon='famicons:location-outline' className='mr-2' />
          {entry.location}
        </div>
        <div className='flex items-cente'>
          <Icon icon='fontisto:date' className='mr-2 relative top-1' />
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
