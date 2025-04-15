import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFoods: string[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    gender: 'male',
    favoriteFoods: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to database
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={(e) => setFormData({ ...formData, gender: 'male' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={(e) => setFormData({ ...formData, gender: 'female' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Please choose your favorite foods
          </label>
          <div className="mt-2 space-y-2">
            {['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad'].map((food) => (
              <label key={food} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={food}
                  checked={formData.favoriteFoods.includes(food)}
                  onChange={(e) => {
                    const foods = e.target.checked
                      ? [...formData.favoriteFoods, food]
                      : formData.favoriteFoods.filter((f) => f !== food);
                    setFormData({ ...formData, favoriteFoods: foods });
                  }}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">{food}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}