import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  field: any;
  value: any;
  error?: string;
  onChange: (key: string, value: any) => void;
  fieldKey: string;
};

export default function FormField({
  field,
  value,
  error,
  onChange,
  fieldKey,
}: Props) {
  return (
    <div className="mb-4 last:mb-0">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {field.label}
      </label>

      {/* TEXTAREA */}
      {field.type === "textarea" && (
        <>
          <Textarea
            value={value || ""}
            onChange={(e) => onChange(fieldKey, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className={`min-h-[100px] rounded-2xl p-4 text-base ${error ? "border-red-500 bg-red-50" : "border-slate-300 bg-white"
              }`}
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </>
      )}

      {/* STATUS */}
      {field.type === "status" && (
        <>
          <Select value={value || ""} onValueChange={(val) => onChange(fieldKey, val)}>
            <SelectTrigger className="h-12 py-6 w-full rounded-2xl border-slate-300 bg-white text-base">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl p-2">
              <SelectItem className="py-2" value="Pass">
                Pass
              </SelectItem>

              <SelectItem className="py-2" value="Doubtful">
                Doubtful
              </SelectItem>

              <SelectItem className="py-2" value="Fail">
                Fail
              </SelectItem>
            </SelectContent>
          </Select>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </>
      )}

      {field.type === "cement_type" && (
        <>
          <Select
            value={value || ""}
            onValueChange={(val) => onChange(fieldKey, val)}
          >
            <SelectTrigger className="h-12 py-6 w-full rounded-2xl border-slate-300 bg-white text-base">
              <SelectValue placeholder="Select cement type" />
            </SelectTrigger>

            <SelectContent className="rounded-2xl p-2">
              <SelectItem className="py-2" value="PPC">PPC</SelectItem>
              <SelectItem className="py-2" value="PCC">PCC</SelectItem>
              <SelectItem className="py-2" value="White Cement">White Cement</SelectItem>
            </SelectContent>
          </Select>

          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </>
      )}

      {field.type === "select" && (
        <>
          <Select value={value || ""} onValueChange={(val) => onChange(fieldKey, val)}>
            <SelectTrigger className="h-12 py-6 w-full rounded-2xl border-slate-300 bg-white text-base">
              <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>

            <SelectContent className="rounded-2xl p-2">
              {(field.options || []).map((option: string) => (
                <SelectItem key={option} className="py-2" value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </>
      )}
      {/* FILE */}
      {field.type === "file" && (
        <>
          <Input
            type="file"
            onChange={(e) =>
              onChange(fieldKey, e.target.files?.[0] || null)
            }
            className="h-12 rounded-2xl border-slate-300 bg-white"
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </>
      )}

      {/* INPUT */}
      {!["textarea", "status", "file", "cement_type", "select"].includes(field.type) && (
        <>
          <Input
            type={field.type}
            value={value || ""}
            disabled={field.disabled}
            onChange={(e) => onChange(fieldKey, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className={`h-12 rounded-2xl px-4 text-base ${error ? "border-red-500 bg-red-50" : "border-slate-300 bg-white"
              }`}
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </>
      )}
    </div>
  );
}
