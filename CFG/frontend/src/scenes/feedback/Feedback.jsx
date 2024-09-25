// FeedbackForm.js
import React, { useState } from 'react';
import './Feedback.scss'; 


function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',  
    rating: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.rating) formErrors.rating = 'Rating is required';
    if (!formData.comments) formErrors.comments = 'Comments are required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Submitted:', formData);
      setFormData({
        name: '',
        email: '',
        rating: '',
        comments: ''
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className={errors.rating ? 'input-error' : ''}
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        {errors.rating && <p className="error-text">{errors.rating}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className={errors.comments ? 'input-error' : ''}
        ></textarea>
        {errors.comments && <p className="error-text">{errors.comments}</p>}
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
