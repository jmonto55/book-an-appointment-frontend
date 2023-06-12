import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import HouseSlider from './HouseSlider';

export default function HousesList() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-center text-3xl font-black tracking-wider">LATEST HOUSES</h1>
      <p className="mb-20 text-center text-gray-100 text-md font-medium mt-4">Please select a House</p>
      <div className="flex w-full justify-between items-center">
        <div className="p-6 md:pl-12  bg-lime text-white-100 rounded-r-full cursor-pointer">
          <BiLeftArrow size={20} />
        </div>
        <div>
          <HouseSlider />
        </div>
        <div className="p-6 md:pr-12  bg-lime text-white-100 rounded-l-full cursor-pointer">
          <BiRightArrow size={20} />
        </div>
      </div>
    </div>
  );
}
