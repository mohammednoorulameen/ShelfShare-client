
"use client";

import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import type { LoginFormProps, FloatingInputProps } from "../../types/form.types";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm: React.FC<LoginFormProps> = ({ type }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h1 className="text-xl font-bold text-gray-900 mb-1">
          Welcome to <span className="text-blue-600">ShelfShare</span>
        </h1>
      </motion.div>

      {/* GOOGLE ICON — centered above form */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => console.log("Google Login Triggered")}
        className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 hover:bg-gray-100 mb-3"
      >
        <FcGoogle size={24} />
      </motion.button>

      {/* Center Form */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="w-full flex justify-center"
      >
        <Form className="space-y-3 w-72">
          <AnimatedField name="email" type="email" label="Email Address" />
          <AnimatedField name="password" type="password" label="Password" />

          {/* Signup + Forgot Password Row — reduced space */}
 <div className="flex justify-center gap-40 text-[10px] text-gray-500 font-medium -mt-2">
              <Link
              to={`/auth/${type}/forgot-password`}
              className="hover:text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
            <Link
              to={`/auth/${type}/register`}
              className="hover:text-blue-600 hover:underline"
            >
              Signup
            </Link>

          
          </div>


          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-72 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 mx-auto block capitalize"
          >
            {type} Login
          </motion.button>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;


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
      focus:ring-2 focus:ring-blue-600 focus:border-blue-500 transition-all duration-300 h-9"
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


