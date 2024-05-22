import React from 'react'
import useVideoList from '../hooks/useVideoList'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoList = () => {
    useVideoList();
    const videos = useSelector(store => store.video.video);
    return (
        <div className='flex flex-wrap'>
            {videos && videos.map(v =>
                <Link key={v.id} to={"/watch?v=" + v.id}>
                    <VideoCard  info={v} />
                </Link>)}
        </div>
    )
}

export default VideoList