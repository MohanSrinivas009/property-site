import React,{useState} from 'react'
import './Seller.css'
const SellerPage = () => {
  const [formData, setFormData] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    hospitals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can handle form submission here, e.g., send data to a server
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Property Details</h2>
      <div className="form-group">
        <label>
          Area:
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Nearby Hospitals:
          <input
            type="text"
            name="hospitals"
            value={formData.hospitals}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SellerPage