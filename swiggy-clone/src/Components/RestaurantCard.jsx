/* eslint-disable react/prop-types */
export default function RestaurantCard({ imgLink, resName, cuisins, rating }) {
  return (
    <div className="w-[1/4] p-5">
      <div>
        <img
          className="rounded-md w-52 hover:scale-90 ease-in-out-out delay-150 cursor-pointer"
          src={imgLink}
          alt=""
        />
        <h1> {resName}</h1>
        {rating} • {cuisins}
      </div>
    </div>
  );
}
