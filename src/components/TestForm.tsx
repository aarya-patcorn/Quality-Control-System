import { useEffect, useState } from "react";
import Header from "./Header";
import FormField from "./FormField";
import { Button } from "./ui/button";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

import { TESTS } from "../config/testsConfig"; // (move TESTS here later)
import ButtonLoader from "./ui/ButtonLoader";
import toast from "react-hot-toast";
import { validateForm } from "../utils/validateForm";
import { preparePayload } from "../utils/fileUtils";

const API_URL = "https://script.google.com/macros/s/AKfycbyHREcyipyXfTISgUVXvRhG_eqpRY_YUrkqVTN7PfuaqHwZjIvL-51O2adxRoRBsDq1/exec"

export default function TestForm() {
  const [testType, setTestType] = useState("");
  const [expandedSections, setExpandedSections] = useState<any>({});
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const selectedTest = TESTS[testType as keyof typeof TESTS];

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));

    setErrors((prev: any) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const toggleSection = (index: number) => {
    setExpandedSections((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");

    setFormData((prev: any) => ({
      ...prev,
      test_done_by: userData?.name || "",
    }));
  }, []);

  const handleSubmit = async () => {
    try {
      const { isValid, errors, globalError } = validateForm({
        testType,
        TESTS,
        formData,
      });

      if (globalError) {
        toast.error(globalError);
        return;
      }

      // ❌ field errors
      if (!isValid) {
        setErrors(errors);
        toast.error("Please fix validation errors");
        return;
      }

      setLoading(true);

      const cleanData = await preparePayload(formData);

      const payload = {
        testType,
        data: cleanData,
      };

      console.log(payload)

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      const result = JSON.parse(text);

      if (result.success) {
        toast.success("Data submitted successfully");

        setFormData({});
        setTestType("");
        setExpandedSections({});
        setErrors({});
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <div className="mx-auto max-w-lg px-4 py-6">
        {/* TEST SELECTION */}
        {!testType && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(TESTS).map(([key, test]: any) => {
              const Icon = test.icon;

              return (
                <button
                  key={key}
                  onClick={() => setTestType(key)}
                  className="rounded-2xl border bg-white p-4 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  <p className="mt-2 font-medium">{test.label}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* FORM */}
        {testType && selectedTest && (
          <div className="space-y-4">
            {/* HEADER CARD */}
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <h2 className="text-xl font-bold">{selectedTest.label}</h2>
            </div>

            {/* SECTIONS */}
            {selectedTest.sections.map((section: any, i: number) => {
              const open = expandedSections[i] !== false;

              return (
                <div key={i} className="rounded-2xl bg-white border">
                  <button
                    onClick={() => toggleSection(i)}
                    className="flex w-full justify-between p-4"
                  >
                    <span>{section.title}</span>
                    {open ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {open && (
                    <div className="p-4">
                      {section.fields.map((field: any, j: number) => (
                        <FormField
                          key={j}
                          field={field}
                          value={formData[field.name]}
                          error={errors[field.name]}
                          fieldKey={field.name}
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* SUBMIT */}
            <div className="pt-2">
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="h-14 w-full rounded-2xl text-base font-semibold shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Submit Test Record
                    </>
                  )}
                </span>
              </Button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}