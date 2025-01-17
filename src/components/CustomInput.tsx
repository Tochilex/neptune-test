import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

import PhoneInput from "react-phone-number-input";

// const formSchema = authformSchema ("sign-up")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = authformSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  isPhoneInput?: boolean;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  isPhoneInput,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5">
          <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {isPhoneInput ? (
                <PhoneInput
                  id={name}
                  placeholder={placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  // Specify the countries you want to include
                  countries={["NG", "US", "GH", "CA"]} // Example countries: Nigeria, USA, UK, Canada
                  defaultCountry="NG" // Set Nigeria as the default country
                  countryCallingCodeEditable={false}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage className="text-12 text-red-500 mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
