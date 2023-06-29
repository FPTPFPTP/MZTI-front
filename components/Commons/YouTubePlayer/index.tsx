import { YoutubeStyle } from './styled';

interface YouTubePlayerProps {
    url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|shorts\/)?([^#\&\?]*).*/i);
        return match && match[1];
    };

    const videoId = getYouTubeVideoId(url);

    return (
        <div css={YoutubeStyle}>
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
