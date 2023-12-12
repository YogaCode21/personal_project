const ImageCard = ({image}) => {
  console.log(image.tags[1]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image.user.profile_image.large}
        alt="Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user.name}
        </div>
        <ul>
          <li>
            <strong>Like : </strong>{image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {image.tags[0].title}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {image.tags[1].title}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {image.tags[2].title}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
