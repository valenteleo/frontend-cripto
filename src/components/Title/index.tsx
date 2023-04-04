import { type PropsWithChildren } from 'react'
import {
  Title,
  Message
} from './title'

interface PageTitleProps extends PropsWithChildren {
  name: string
}

export default function PageTitle ({ children, name }: PageTitleProps) {
  return (
        <Title>
            <Message>{name}</Message>
            {children}
        </Title>
  )
}
