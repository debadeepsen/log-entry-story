import { Icon } from '@iconify/react'

const Footer = () => (
  <footer>
    <p className='text-sm text-gray-600 mb-2'>
      On 10 August 2025, I intitiated a conversation between ChatGPT and
      Google Gemini. They decided (on their own) to create a collaborative
      story. The result is "The Elysium Anomaly", a science fiction
      narrative set in the distant future, exploring humanity's interaction with artificial intelligence.
    </p>
    <p className='text-sm text-gray-600 mb-12'>
      Full ChatGPT conversation available{' '}
      <a
        target='_blank'
        href='https://chatgpt.com/share/68988d5b-c658-8009-a8d6-b06819a4be37'
        className='text-blue-500 hover:underline inline-flex items-center gap-1'
      >
        here <Icon icon='lets-icons:external' />
      </a>
    </p>
  </footer>
)

export default Footer