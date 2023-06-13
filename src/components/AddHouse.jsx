import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../redux/houses/housesSlice';

const AddHouse = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([
    { name: 'name', value: '' },
    { name: 'address', value: '' },
    { name: 'description', value: '' },
    { name: 'city', value: '' },
    { name: 'photo', value: '' },
    { name: 'night_price', value: 0 },
  ]);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => prevFormData.map((field) => (
      field.name === name ? { ...field, value } : field
    )));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const houseData = formData.reduce(
      (data, field) => ({ ...data, [field.name]: field.value }),
      {},
    );
    dispatch(createHouse(houseData));
    setFormData((prevFormData) => prevFormData.map((field) => (field.name === 'nightPrice' ? { ...field, value: 0 } : field)));
  };

  return (
    <div className="p-8 h-screen" style={{ backgroundColor: '#96bf01' }}>
      <h2 className="font-black uppercase mx-auto text-center text-2xl text-white">ADD A NEW HOUSE</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-end container mx-auto border px-6 py-8 max-w-md mt-6 bg-gray-100 rounded-md">
        {formData.map((field) => (
          <input
            key={field.name}
            type={field.name === 'nightPrice' ? 'number' : 'text'}
            name={field.name}
            placeholder={capitalize(field.name)}
            value={field.value}
            onChange={handleChange}
            className="mt-2 w-full p-2 border
            border-slate-300 rounded text-sm shadow-sm
            focus:outline-none focus:border-sky-500
            focus:ring-1 focus:ring-sky-500"
          />
        ))}
        <button
          type="submit"
          className="rounded-full bg-yellow-400 px-6 py-2 mt-4
          color text-white font-bold w-min"
          style={{ 'background-color': '#97BF0F' }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddHouse;
