import { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from '../utils/videoSlice';

const useVideoList = () => {
    const dispatch = useDispatch();
    const isVideo = useSelector(store => store.video.video);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        dispatch(addVideo(json.items));
    }
    useEffect(() => {
        !isVideo && getVideos();
    }, []);
}
export default useVideoList;