import { FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { BiLeftArrow } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { fetchHouses } from '../redux/houses/housesSlice';
import { deleteHouse } from '../redux/houses/deleteHouseSlice';

const DeleteHouse = (props) => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);
  const { authorized } = props;

  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this house!',
      icon: 'warning',
      confirmButtonColor: '#96BF01',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteHouse(houseId)).then(() => {
          Swal.fire('Deleted!', 'The house has been deleted.', 'success').then(() => {
            window.location.reload();
          });
        });
      }
    });
  };
  if (authorized) {
    return (
      <div className="h-screen w-screen mx-auto ">
        <div className="hover:bg-opacity-100 z-20 bg-lime p-6 pl-4 md:pl-12 rounded-r-full fixed bottom-8 md:bottom-10 left-0 border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-lg">
          <NavLink to="/home">
            <BiLeftArrow size={20} className="cursor-pointer text-white-100" />
          </NavLink>
        </div>
        <div className="h-full overflow-auto">
          <h2 className="mt-28 text-center text-4xl font-black tracking-widest">SELECT HOUSE TO DELETE</h2>
          <ul className="flex flex-col justify-center gap-8 items-center py-20">
            {housesList.map((house) => (
              <div key={house.id} className="bg-white shadow rounded-lg p-4 relative">
                <div className="relative inline-flex">
                  <img className="rounded-lg h-auto mb-4" src={house.photo} alt={house.name} />
                  <div className="absolute top-6 right-5 bg-mustard text-white p-1 rounded-lg">
                    <span className="font-bold">
                      $
                      {house.night_price}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="uppercase text-xl font-bold mb-2">{house.name}</h1>
                    <p className="mb-2">
                      <span className="mr-1 rounded-lg">
                        <FiInfo className="inline fill-white text-[#96BF01] mr-1" />
                      </span>
                      {house.description}

                    </p>
                    <p className="mb-2">
                      <span className="mr-1 rounded-lg">
                        <FaMapMarkerAlt className="inline fill-[#96BF01] mr-1" />
                      </span>
                      {house.address}
                    </p>
                    <p className="mb-2">
                      <span className="m-1 rounded-lg">
                        <FaCity className="inline fill-[#96BF01]" />
                      </span>
                      {house.city}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleDelete(house.id)}
                      className="bg-lime border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-mustard text-white rounded-full px-4 py-2 mt-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
    </>
  );
};
DeleteHouse.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default DeleteHouse;
