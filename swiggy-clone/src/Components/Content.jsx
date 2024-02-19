import RestaurantCard from "./RestaurantCard";

export default function Content() {
  return (
    <div className="mx-52 grid sm:grid-cols-4">
      <RestaurantCard
        imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4"
        resName="KFC"
        cuisins="Burger,Fries etc"
        rating="4.3"
      />
      <RestaurantCard
        imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4"
        resName="McDonalds"
        cuisins="Coke,Fries etc"
        rating="4.0"
      />
    </div>
  );
}
