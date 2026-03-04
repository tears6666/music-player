import { HOME_PAGE, PLAYLIST } from '../../constants/routes.constants'
import type { LinkType } from '../types/link.type'

export const LINK_LIST: LinkType[] = [
  {
    'id': 1,
    'text': 'All Songs',
    'to': HOME_PAGE
  },
  {
    'id': 2,
    'text': 'Playlist',
    'to': PLAYLIST
  }
]