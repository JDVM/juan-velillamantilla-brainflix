import "./VideoSection.scss"

function VideoSection(){
    return(
        <div className="video">
          <video className="video__content" src="https://project-2-api.herokuapp.com/stream" type="video">Erro Video Did not Load Properly</video>  
        </div>
        
        
        
    )
}

export default VideoSection;