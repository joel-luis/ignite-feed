import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Post } from 'components/Post'

import styles from './App.module.css'
import 'global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joel-luis.png',
      name: 'Joel Luís',
      role: 'Developer Front End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: ' 👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-10-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: ' 👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-10-22 10:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
