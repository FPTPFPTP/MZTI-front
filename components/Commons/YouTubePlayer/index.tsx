import SearchCloseIcon from '@assets/icons/search/searchClose.svg';
import { YoutubeStyle } from './styled';

interface YouTubePlayerProps {
    url: string;
    isSelect?: boolean;
    onClick?: () => void;
    onDelete?: () => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url, isSelect, onClick, onDelete }) => {
    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|shorts\/)?([^#\&\?]*).*/i);
        return match && match[1];
    };

    const videoId = getYouTubeVideoId(url);

    return (
        <div css={YoutubeStyle(!isSelect)} onClick={onClick}>
            {onDelete && (
                <button className={'youtube_delete'}>
                    <SearchCloseIcon onClick={onDelete} style={{ width: 20 }} />
                </button>
            )}
            <div className="youtube">
                <iframe
                    width="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubePlayer;
