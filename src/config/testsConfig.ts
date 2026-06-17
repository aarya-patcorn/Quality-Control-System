import { Building2, Layers, FlaskConical, Package, Truck, Microscope } from "lucide-react";

export const TESTS = {
    cement: {
        label: "Cement Test",
        icon: Building2,
        sections: [
            {
                title: "Dispatch & Sample",
                fields: [
                    { label: "Cement Unloading Date", name: "cement_unloading_date", type: "date" },
                    { label: "Supplier Name", name: "supplier_name", type: "text" },
                    { label: "Bill Invoice No.", name: "bill_invoice_no", type: "text" },
                    { label: "Cement Type", name: "cement_type", type: "cement_type" },
                    { label: "Testing Date", name: "testing_date", type: "date" },
                ],
            },
            {
                title: "Test Results",
                fields: [
                    { label: "Initial Setting Time (mins)", name: "initial_setting_time_mins", type: "number" },
                    { label: "Workability / Flow (mm)", name: "workability_flow_mm", type: "number" },
                    { label: "Image of Result (Workability)", name: "image_of_result_workability", type: "number" },
                    { label: "Fineness (% retained on 90µm)", name: "fineness_retained_on_90_m", type: "number", full: true },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text", disabled: true },
                    { label: "Remarks (if any)", name: "remarks_if_any", type: "textarea", full: true, required: false },
                    { label: "Status", name: "status", type: "status", full: true },
                ],
            }
        ],
    },

    sand: {
        label: "Sand Sieve Analysis",
        icon: Layers,
        sections: [
            {
                title: "Sample Details",
                fields: [
                    { label: "Sand Unloading Date", name: "sand_unloading_date", type: "date" },
                    { label: "Supplier Name", name: "supplier_name", type: "text" },
                    { label: "Bill/Invoice No.", name: "bill_invoice_no", type: "text" },
                    { label: "Sand Type", name: "sand_type", type: "select", options: ["White", "Grey"] },
                    { label: "Sand Size", name: "sand_size", type: "select", options: ["600", "1200"] },
                    { label: "Testing Date", name: "testing_date", type: "date" },
                    { label: "Sample No", name: "sample_no", type: "select", options: ["1", "2", "3"] },
                ],
            },
            {
                title: "Sieve Readings",
                fields: [
                    { label: "1mm (gm)", name: "1mm_gm", type: "number" },
                    { label: "600 µm (gm)", name: "600_m_gm", type: "number" },
                    { label: "300 µm (gm)", name: "300_m_gm", type: "number" },
                    { label: "150 µm (gm)", name: "150_m_gm", type: "number" },
                    { label: "90 µm (gm)", name: "90_m_gm", type: "number" },
                    { label: "Weight in Pan (gm)", name: "weight_in_pan_gm", type: "number" },
                    { label: "Moisture Percentage", name: "moisture_percentage", type: "number" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text", disabled: true },
                    { label: "Remarks (if any)", name: "remarks_if_any", type: "textarea", full: true },
                    { label: "Status", name: "status", type: "status", full: true, required: false },
                ],
            },
        ]
    },

    adhesiveSieve: {
        label: "Adhesive Sieve Analysis",
        icon: FlaskConical,
        sections: [
            {
                title: "Batch Info",
                fields: [
                    { label: "Testing Date", name: "testing_date", type: "date" },
                    { label: "Batch No", name: "batch_no", type: "text" },
                    { label: "Adhesive Type", name: "adhesive_type", type: "select", options: ["k50", "k60", "k80", "k90", "kamdhenuX"], full: true },
                    { label: "Bag Size", name: "bag_size", type: "select", options: ["20kg", "50 kg"] },
                ],
            },
            {
                title: "Sieve Readings",
                fields: [
                    { label: "1mm (gm)", name: "1mm_gm", type: "number" },
                    { label: "600 µm (gm)", name: "600_m_gm", type: "number" },
                    { label: "300 µm (gm)", name: "300_m_gm", type: "number" },
                    { label: "150 µm (gm)", name: "150_m_gm", type: "number" },
                    { label: "90 µm (gm)", name: "90_m_gm", type: "number" },
                    { label: "Weight in Pan (gm)", name: "weight_in_pan_gm", type: "number" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text", disabled: true },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true, required: false },
                    { label: "Status", name: "status", type: "status", full: true },
                ],
            },
        ],
    },

    beforePacking: {
        label: "Before Packing Test",
        icon: Package,
        sections: [
            {
                title: "Batch Info",
                fields: [
                    { label: "Manufacturing Date", name: "manufacturing_date", type: "date" },
                    { label: "Batch No", name: "batch_no", type: "text" },
                    { label: "Adhesive Type", name: "adhesive_type", type: "select", options: ["k50", "k60", "k80", "k90", "kamdhenuX"] },
                    { label: "Bag Size", name: "bag_size", type: "select", options: ["20kg", "50 kg"] },
                ],
            },
            {
                title: "Inspection",
                fields: [
                    { label: "Luss Formation / Stickiness", name: "luss_formation_stickiness", type: "text" },
                    { label: "Adhescive Visual Inspection & Luss", name: "visual_analysis_file", type: "file" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text", disabled: true },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true, required: false },
                    { label: "Status", name: "status", type: "status", full: true },
                ],
            },
        ],
    },

    beforeDispatch: {
        label: "Before Dispatch Test",
        icon: Truck,
        sections: [
            {
                title: "Batch Info",
                fields: [
                    { label: "Manufacturing Date", name: "manufacturing_date", type: "date" },
                    { label: "Batch No", name: "batch_no", type: "text" },
                    { label: "Adhesive Type", name: "adhesive_type", type: "text" },
                ],
            },
            {
                title: "Performance",
                fields: [
                    { label: "Initial Setting Time", name: "initial_setting_time", type: "number" },
                    { label: "Initial Setting File", name: "initial_setting_file", type: "file" },
                    { label: "Flow Test (mm)", name: "flow_test_mm", type: "number" },
                    { label: "Flow Test File", name: "flow_test_file", type: "file" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true, required: false },
                    { label: "Status", name: "status", type: "status", full: true },
                ],
            },
        ],
    },

    initialAdhesive: {
        label: "Initial Adhesive Test",
        icon: Microscope,
        sections: [
            {
                title: "Sample Info",
                fields: [
                    { label: "Batch No", name: "batch_no", type: "text" },
                    { label: "Manufacturing Date", name: "manufacturing_date", type: "date" },
                    { label: "Testing Date", name: "testing_date", type: "date" },
                    { label: "Sample No", name: "sample_no", type: "number" },
                    { label: "Adhesive Type", name: "adhesive_type", type: "text" },
                    { label: "Adhesive Color", name: "adhesive_color", type: "text" },
                ],
            },
            {
                title: "Environment & Performance",
                fields: [
                    { label: "Temp (°C)", name: "temp_c", type: "number" },
                    { label: "Humidity (%)", name: "humidity", type: "number" },
                    { label: "Slip Resistance", name: "slip_resistance", type: "number" },
                    { label: "Open Time", name: "open_time", type: "number" },
                    { label: "Adjustment Time", name: "adjustment_time", type: "number", full: true },
                ],
            },
            {
                title: "Result",
                fields: [
                    { label: "Status", name: "status", type: "status", full: true },
                ],
            },
        ],
    },
}
