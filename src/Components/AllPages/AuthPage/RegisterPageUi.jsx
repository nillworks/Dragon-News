'use client';

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

const RegisterPageUi = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());
    console.log(registerData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <Form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-full max-w-md p-8 rounded-md shadow-sm"
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register your account
        </h2>

        <hr className="my-5 border-gray-300" />

        {/* Name */}
        <div className="mb-4">
          <TextField isRequired name="name">
            <Label className="block text-sm text-gray-600 mb-2">
              Your Name
            </Label>
            <Input
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-200 text-sm rounded outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <TextField name="photo">
            <Label className="block text-sm text-gray-600 mb-2">
              Photo URL
            </Label>
            <Input
              placeholder="Enter your photo url"
              className="w-full px-4 py-2 bg-gray-200 text-sm rounded outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Email */}
        <div className="mb-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email';
              }
              return null;
            }}
          >
            <Label className="block text-sm text-gray-600 mb-2">Email</Label>
            <Input
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-gray-200 text-sm rounded outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Password */}
        <div className="mb-4">
          <TextField
            isRequired
            name="password"
            type="password"
            validate={value => {
              if (value.length < 6) {
                return 'Password must be at least 6 characters';
              }
              return null;
            }}
          >
            <Label className="block text-sm text-gray-600 mb-2">Password</Label>
            <Input
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-200 text-sm rounded outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-5">
          <input type="checkbox" name="terms" required className="mr-2" />
          <label className="text-sm text-gray-600">
            Accept Term & Conditions
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPageUi;
