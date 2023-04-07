import React from 'react';
import '../lessondetails/lessondetails.scss';
import data from '../../json/lessons.json';
import { useParams, Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Banner from '../banner/Banner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LessonDetails() {
  const { id } = useParams();
  const lessonIndex = data.findIndex((lesson) => lesson.id.toString() === id);

  if (lessonIndex === -1) {
    return <div>Lesson not found</div>;
  }

  const lesson = data[lessonIndex];
  const nextLesson = data[lessonIndex + 1];

  return (
    <div className='lesson-container'>
      <Banner title={lesson.title} subtitle={lesson.description} />
      <div className='lesson-content'>
        <div className='video'>
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
        </div>
        <div className='content'>
            <h3>{lesson.title}</h3>
          <p>{lesson.content}</p>
          {nextLesson && (
            <button><Link className="link"to={`/lesson/${nextLesson.id}`}><ArrowForwardIcon/>Next Lesson</Link></button>
          )}
        </div>
      </div>
    </div>
  );
}
