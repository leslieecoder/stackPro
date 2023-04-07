import React from 'react'
import '../lessondetails/lessondetails.scss'
import data from'../../json/lessons.json'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function LessonDetails() {
    const { id } = useParams();
    const lesson = data.find((lesson) => lesson.id.toString() === id);

    if (!lesson) {
        return <div>Lesson not found</div>;
      }
  return (
    <div>
    <h2>{lesson.title}</h2>
    <YouTube
  videoId={lesson.videoUrl.split('v=')[1]}
  opts={{
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }}
  onReady={(event) => event.target.pauseVideo()}
/>
    <p>{lesson.content}</p>
  </div>
  )
}
