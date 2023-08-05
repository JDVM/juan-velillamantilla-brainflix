import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";



function Body({ selectedVid, filteredVids}) {
  console.log(selectedVid);
  return (
    <div className="body">
      <div className="body__vidinfo">
        <VideoDescrition
          // currentVid={props.currentVid}
          // descriptionPostDate={props.descriptionPostDate}
        />
        <CommentsContainer
          // currentVid={props.currentVid.comments}
          // commentEventHandler={props.commentEventHandler}
        />
      </div>
      <NextVideo filteredVids={filteredVids}/>
    </div>
  );
}

export default Body;
