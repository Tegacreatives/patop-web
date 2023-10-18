"use client";

import { categories } from "../utils/categories";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FileUpload } from "@/components/fileUpload";

import toast from "react-hot-toast";

const today = new Date();

interface IProjectInput {
  title: string;
  description: string;
  imageSrc: string;
  goalAmount: number;
  endDate: Date;
  category: string;
}

const CampaignForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProjectInput>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: "",
      goalAmount: 1000,
      endDate: today,
      category: "",
    },
  });
  const router = useRouter();
  const inputClassName =
    "block p-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500";
  const labelClassName = "mb-2 text-lg font-medium text-gray-900";

  const [features, setfeatures] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    time: 0,
    revisions: 0,
    feature: "",
    price: 1,
    // shortDesc: "",
  });
  const removeFeature = (index: number) => {
    const clonedFeatures = [...features];
    clonedFeatures.splice(index, 1);
    setfeatures(clonedFeatures);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addFeature = () => {
    if (data?.feature) {
      setfeatures([...features, data.feature]);
      setData({ ...data, feature: "" });
    }
  };

  const onSubmit: SubmitHandler<IProjectInput> = (data) => {
    setIsUploading(true);
    axios
      .post("/api/campaign", data)
      .then(() => toast.success("Project successfully created"))
      .then(() => router.push("/my-campaigns"))
      .then(() => router.refresh());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        <div>
          <label htmlFor="title" className={labelClassName}>
            Project Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className={inputClassName}
            placeholder="What is the title of your project"
          />
          {errors.goalAmount && (
            <span className="text-red-500">Enter your project title</span>
          )}
        </div>
        <div>
          <label htmlFor="categories" className={labelClassName}>
            Select a Category
          </label>
          <select
            {...register("category", { required: true })}
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
          >
            {categories.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-500">Select a project category</span>
          )}
        </div>
      </div>
      {/* Project Description */}
      <div>
        <label htmlFor="description" className={labelClassName}>
          Project Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="block p-2.5 w-full h-[15rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Let the world know about your project"
        ></textarea>
        {errors.description && (
          <span className="text-red-500">
            Write a description about your project
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-11">
        {/* Deadline */}
        <div>
          <label htmlFor="delivery">Deadline</label>
          <input
            {...register("endDate", { required: true })}
            type="date"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            // className={inputClassName}
            placeholder="Deadline for the project"
          />
          {errors.endDate && (
            <span className="text-red-500">Please set a project deadline</span>
          )}
        </div>
        {/* Amount Needed */}
        <div>
          <label htmlFor="price" className={labelClassName}>
            Amount Needed ( NGN )
          </label>
          <input
            {...register("goalAmount", { required: true, min: 1000 })}
            type="number"
            className={`${inputClassName} w-1/5`}
            placeholder="Enter a price"
          />
          {errors.goalAmount && (
            <span className="text-red-500">
              Please enter a minimum amount of NGN1,000
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        {/* Tags */}
        <div>
          <label htmlFor="features" className={labelClassName}>
            Tags
          </label>
          <div className="flex gap-3 items-center mb-5">
            <input
              type="text"
              id="features"
              className={inputClassName}
              placeholder="Enter a Feature Name"
              name="feature"
              value={data.feature}
              onChange={handleChange}
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-[#015E5F] hover:bg-blue-800  font-medium  text-lg px-10 py-3 rounded-md "
              onClick={addFeature}
            >
              Add
            </button>
          </div>
          <ul className="flex gap-2 flex-wrap">
            {features.map((feature, index) => {
              return (
                <li
                  key={feature + index.toString()}
                  className="flex gap-2 items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 cursor-pointer hover:border-red-200"
                >
                  <span>{feature}</span>
                  <span
                    className="text-red-700"
                    onClick={() => removeFeature(index)}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Short Description */}
        <div>
          <label htmlFor="shortDesc" className={labelClassName}>
            Short Description
          </label>
          <input
            type="text"
            className={`${inputClassName} w-4/5`}
            id="shortDesc"
            placeholder="Enter a short description."
            name="shortDesc"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        {/* Project Image */}
        <div>
          <label htmlFor="image" className={labelClassName}>
            Project Images
          </label>
          <div>
            <div>
              <FileUpload
                endpoint="projectImage"
                onChange={(url) => {
                  setValue("imageSrc", url || "", {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  toast.success("Image uploaded successfully");
                }}
              />
              <div className="text-xs text-muted-foreground">
                16:9 aspect ratio recommended
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input
          type="submit"
          className={`border text-lg font-semibold px-5 py-3 mb-20 bg-[#015E5F]
           text-white rounded-md hover:bg-[#017A7A]
           ${
             isUploading ? "bg-[#017A7A] pointer-events-none" : "cursor-pointer"
           }
           `}
        />
      </div>
    </form>
  );
};

export default CampaignForm;
