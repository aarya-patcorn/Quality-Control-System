import { getFieldKey } from "./formatUtils";

type ValidateParams = {
  testType: string;
  TESTS: any;
  formData: Record<string, any>;
};

export const validateForm = ({
  testType,
  TESTS,
  formData,
}: ValidateParams) => {
  const errors: Record<string, string> = {};
  let isValid = true;

  // ❌ No test selected
  if (!testType) {
    return {
      isValid: false,
      errors: {},
      globalError: "Please select test type",
    };
  }

  const selectedTest = TESTS[testType];

  selectedTest.sections.forEach((section: any) => {
    section.fields.forEach((field: any) => {
      const key = getFieldKey(field.label);
      const value = formData[key];

      // -----------------------------
      // REQUIRED VALIDATION
      // -----------------------------
      if (
        field.type !== "file" &&
        (!value || value === "" || value === "null")
      ) {
        errors[key] = `${field.label} is required`;
        isValid = false;
        return;
      }

      // -----------------------------
      // FILE VALIDATION
      // -----------------------------
      if (field.type === "file" && value) {
        if (value instanceof File) {
          const allowedTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp",
          ];

          if (!allowedTypes.includes(value.type)) {
            errors[key] = "Only PNG, JPG, JPEG, WEBP allowed";
            isValid = false;
          }

          if (value.size > 2 * 1024 * 1024) {
            errors[key] = "File must be less than 2MB";
            isValid = false;
          }
        }
      }

      // -----------------------------
      // NUMBER VALIDATION
      // -----------------------------
      if (
        field.type === "text" &&
        value &&
        key.match(/wt|flow|temp|humidity|time|resistance|fineness|pan/i)
      ) {
        if (isNaN(Number(value))) {
          errors[key] = "Must be a valid number";
          isValid = false;
        }
      }
    });
  });

  return {
    isValid,
    errors,
    globalError: null,
  };
};