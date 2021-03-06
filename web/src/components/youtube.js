import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export default ({ node }) => {
  const { url } = node
  const id = getYouTubeId(url)
  const opts = {
  }
  return (
    <YouTube 
    videoId={id} 
    opts={opts}/>
  )
}
