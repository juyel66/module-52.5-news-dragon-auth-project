import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
    const { title, thumbnail_url, details,_id,image_url } = aNews;
    return (
        <div>
            <div className="card mb-16   bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <p className="p-4 text-center">
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}
                                className="text-blue-600 hover:underline hover:text-red-600">Read More...</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </p>
            </div>

        </div>
    );
};

export default NewsCard;