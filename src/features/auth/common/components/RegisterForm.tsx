"use client";

import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import type {
  FloatingInputProps,
  RegisterFormProps,
} from "../../types/form.types";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const RegisterForm: React.FC<RegisterFormProps> = ({ type, onFileChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen  flex flex-col items-center justify-center px-4 py-10"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-xl font-bold text-gray-900 mb-1">
          Create your <span className="text-blue-600">ShelfShare</span> Account
        </h1>
      </motion.div>

      {/* GOOGLE AUTH BUTTON — moved to top */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => console.log("Google Login Triggered")}
        className="flex items-center justify-center w-10 h-10  mb-3 rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <FcGoogle size={22} />
      </motion.button>

      {/* CENTERED FORM */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="w-full flex justify-center"
      >
        <Form className="space-y-2 w-72">
          {/* USER FIELDS */}
          {type === "user" && (
            <>
              <AnimatedField name="userName" label="User Name" />
              <AnimatedField name="email" type="email" label="Email Address" />
              <AnimatedField
                name="phoneNumber"
                type="tel"
                label="Phone Number"
              />
              <AnimatedField name="password" type="password" label="Password" />
              <AnimatedField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
              />
              <AnimatedField
                name="referralCode"
                label="Referral Code (Optional)"
              />
            </>
          )}

          {/* VENDOR FIELDS */}
          {type === "vendor" && (
            <>
              <AnimatedField name="bussinessName" label="Business Name" />
              <AnimatedField name="email" type="email" label="Email Address" />
              <AnimatedField
                name="phoneNumber"
                type="tel"
                label="Phone Number"
              />
              <AnimatedField name="password" type="password" label="Password" />
              <AnimatedField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
              />
            </>
          )}

          {/* FILE UPLOAD */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-72 mx-auto"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onFileChange(e.target.files?.[0] || null)}
              className="block w-full border border-gray-300 rounded-md file:px-3 file:py-1.5 text-sm"
            />
            {/* <p className="text-xs text-gray-500 mt-1 ml-1"> Photo (optional)</p> */}
            <div className="flex justify-between mt-1 text-xs">
              <p className="text-gray-500">Photo (optional)</p>
              <Link
                to={`/auth/${type}/login`}
                className="text-blue-600 hover:underline font-medium"
              >
                Already have an account?
              </Link>
            </div>
          </motion.div>

          {/* SUBMIT */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-72 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 mx-auto block"
          >
           {type} Signup
          </motion.button>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default RegisterForm;

/* -----------------------------------
  Floating input
------------------------------------ */

const AnimatedField: React.FC<FloatingInputProps> = ({
  name,
  label,
  type = "text",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.28 }}
    className="relative w-72 mx-auto"
  >
    <Field
      type={type}
      name={name}
      placeholder=" "
      className="peer w-full px-3 pt-2.5 pb-1.5 border rounded-md border-gray-300 text-[13px]
      focus:ring-2 focus:ring-red-700 focus:border-blue-500 transition-all duration-300 h-9"
    />

    <label
      htmlFor={name}
      className="absolute left-3 -top-2 bg-white px-1 text-[11px] text-gray-500
        peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-2
        peer-focus:-top-2 peer-focus:text-[11px] peer-focus:text-blue-600
        transition-all duration-300"
    >
      {label}
    </label>

    <ErrorMessage
      name={name}
      component="p"
      className="text-red-500 text-[11px] mt-0.5"
    />
  </motion.div>
);
