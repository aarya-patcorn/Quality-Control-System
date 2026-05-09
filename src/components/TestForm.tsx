import { useEffect, useState } from "react";
import Header from "./Header";
import FormField from "./FormField";
import { Button } from "./ui/button";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import { TESTS } from "../config/testsConfig"; // (move TESTS here later)
import ButtonLoader from "./ui/ButtonLoader";
import toast from "react-hot-toast";
import { validateForm } from "../utils/validateForm";
import { preparePayload } from "../utils/fileUtils";

const API_URL = "https://script.google.com/macros/s/AKfycbwCFxRg8ILnxMyU8biGU8Ar_1ojgJ5aFJ5rjR7xp8W5h42BW1Ma14yLswG5FTkRAvk-8Q/exec"

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
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
            <div className="flex items-center justify-between rounded-2xl bg-slate-900 p-5 text-white">
              <div>
                <h2 className="text-xl font-bold">{selectedTest.label}</h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setTestType("");
                  setExpandedSections({});
                  setErrors({});
                }}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
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

            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* CANCEL */}
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => {
                  setTestType("");
                  setExpandedSections({});
                  setErrors({});
                  setFormData({});
                }}
                className="h-14 rounded-2xl border-slate-300 text-base font-semibold"
              >
                Cancel
              </Button>

              {/* SUBMIT */}
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="h-14 rounded-2xl text-base font-semibold shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Submit Record
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