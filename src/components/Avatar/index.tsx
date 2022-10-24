import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      className={hasBorder ? styles.avatarwithBorder : styles.avatar}
    />
  )
}
