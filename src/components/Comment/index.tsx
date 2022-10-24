import { Avatar } from 'components/Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './styles.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  function handeDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/joel-luis.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joel Luís</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handeDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
