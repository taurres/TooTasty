import LetterAvatars from "../Avatar/LetterAvatars";
// import {useDispatch} from "react-redux";
// import {deleteReview} from "../../actions/ReviewActions";

const ReviewItems = () =>{

    // const dispatch = useDispatch();

    return(
        <>
            <li className="list-group-item">
                <div className="grid-image-left">
                    <LetterAvatars name={'Bob Smith'} />
                </div>

                <div className="wd-tuit">
                    <div className="wd-tuit-heading">
                        <div className="wd-tuit-authorname">
                            <span> Bob Smith</span>
                            <span className="review-time"> 30/12/2013 - 07:37</span>
                            <i
                                // onClick={() =>
                                // deleteReview(dispatch, review)}
                               className="fas fa-remove fa-pull-right"></i>
                        </div>
                    </div>

                    <div className="wd-tuit-content">
                        <div className="wd-tuit-content-text">
                            Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel
                            arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodale
                            lectus purus ut lorem.
                        </div>
                    </div>

                </div>
            </li>
        </>
    );
}

export default ReviewItems;