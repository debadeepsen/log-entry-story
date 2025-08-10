import { Story } from '@/util/types'
import data from '@/data/story.json'
import LogEntry from '@/components/LogEntry'
import Footer from '@/components/Footer'

const HomePage = async () => {
  if (!data) {
    return <p className='p-4'>Loading story...</p>
  }

  const story = data as Story

  return (
    <main className='max-w-3xl mx-auto p-4'>
      <div
        style={{
          backgroundImage: 'url(/log-entry-story/images/spaceship-7722045_1280.jpg)',
          backgroundPositionY: -120
        }}
        className='bg-cover h-64 mb-8 flex items-end text-white'
      >
        <h1 className='text-4xl font-bold ml-6 mb-6'>{story.title}</h1>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Authors:</h2>
        {story.authors.join(', ')}
      </div>
      <div>
        {story.entries.map(entry => (
          <LogEntry key={entry.id} entry={entry} />
        ))}
      </div>
      <hr className='my-8 border-gray-300' />
      <Footer />
    </main>
  )
}

export default HomePage
