import { RxDotFilled } from 'react-icons/rx';
import HouseSlider from './HouseSlider';

export default function HousesList() {
  return (
    <div className="h-screen w-full xl:w-5/6 2xl:w-full  flex flex-col justify-center">
      <h1 className="text-center text-4xl font-black tracking-wider mt-10">LATEST HOUSES</h1>
      <p className="mb-4 md:mb-10 text-center text-gray-100 text-md font-medium mt-4">Please select a House</p>
      <ul className="flex top-4 justify-center py-2 list-none mb-8 md:mb-20">
        {Array.from({ length: 20 }, (_, i) => (
          <li className="text-sm text-gray-100" key={i}><RxDotFilled /></li>
        ))}
      </ul>
      <HouseSlider />
    </div>
  );
}
