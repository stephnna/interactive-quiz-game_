import { 
  FacebookShareButton, 
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon, 
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon
} from "react-share";

const ShareNow = () => {

  const commonPageUrl = "https://interactive-game-quiz.netlify.app/";
  const commonTitle = "I am excited to share my score on interactive quiz game";
  return (
    <>
    <div className="animate-bounce mb-6 rounded-2xl p-2 bg-slate-300">
      Share Now
      </div>
    <div>
        <FacebookShareButton
        url={commonPageUrl}
        quote="Here is my score on interactive game quiz!"
        hashtag="#game"
        >
        <FacebookIcon />
        </FacebookShareButton>
        <LinkedinShareButton
        title={commonTitle}        
        url={commonPageUrl}
        summary="Interactive Quiz Game"
        >
        <LinkedinIcon />
        </LinkedinShareButton>
        <TwitterShareButton
        hashtags={['#Game', '#Quiz', '#interactive']}
        url={commonPageUrl}
        title={commonTitle}
        >
        <TwitterIcon />
        </TwitterShareButton>
        <TelegramShareButton
        url={commonPageUrl}
        title={commonTitle}
        >
        <TelegramIcon />
        </TelegramShareButton>
        <WhatsappShareButton
        url={commonPageUrl}
        title={commonTitle}
        >
        <WhatsappIcon />
        </WhatsappShareButton>
        </div>
       </>    
  )
}

export default ShareNow