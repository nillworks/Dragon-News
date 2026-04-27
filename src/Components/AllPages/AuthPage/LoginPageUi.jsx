'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import { Eye, EyeOff } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const LoginPageUi = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    //
    const formData = new FormData(e.currentTarget);
    const dataObject = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: dataObject.email, // required
      password: dataObject.password, // required
      rememberMe: true,
      callbackURL: '/',
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <Form
        onSubmit={onSubmit}
        className="bg-gray-100 w-full max-w-md p-8 rounded-md shadow-sm space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login your account
        </h2>

        <hr className="border-gray-300" />

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={value => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return 'Please enter a valid email address';
            }
            return null;
          }}
        >
          <Label className="text-sm text-gray-600">Email address</Label>
          <Input
            placeholder="Enter your email address"
            className="bg-gray-200"
          />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type={showPassword ? 'text' : 'password'}
          minLength={8}
          validate={value => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }
            if (!/[A-Z]/.test(value)) {
              return 'Must contain one uppercase letter';
            }
            if (!/[0-9]/.test(value)) {
              return 'Must contain one number';
            }
            return null;
          }}
        >
          <Label className="text-sm text-gray-600">Password</Label>

          <div className="relative">
            <Input
              placeholder="Enter your password"
              className="bg-gray-200 w-full"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Description className="text-xs text-gray-500">
            At least 8 characters, 1 uppercase & 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* Button */}
        <Button
          type="submit"
          className="w-full bg-gray-700 text-white hover:bg-gray-800"
        >
          Login
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t Have An Account?{' '}
          <Link href="/register" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPageUi;
