import { Story } from '@/util/types'
import data from '@/data/story.json'
import LogEntry from '@/components/LogEntry'

const HomePage = async () => {

  if (!data) {
    return <p className='p-4'>Loading story...</p>
  }

  const story = data as Story

  return (
    <main className='max-w-3xl mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-6'>{story.title}</h1>
      <div className='mb-6'>
      <h2 className='text-xl font-bold mb-2'>Authors:</h2>
      {story.authors.join(', ')}</div>
      {story.entries.map(entry => (
        <LogEntry key={entry.id} entry={entry} />
      ))}
    </main>
  )
}

export default HomePage