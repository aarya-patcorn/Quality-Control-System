import { Building2, Layers, FlaskConical, Package, Truck, Microscope } from "lucide-react";

export const TESTS = {
    cement: {
        label: "Cement Test",
        icon: Building2,
        sections: [
            {
                title: "Dispatch & Sample",
                fields: [
                    { label: "Cement Dispatch Date", name: "cement_dispatch_date", type: "date" },
                    { label: "Supplier Name", name: "supplier_name", type: "text" },
                    { label: "Testing Date", name: "testing_date", type: "date" },
                    { label: "Sample No", name: "sample_no", type: "text" },
                ],
            },
            {
                title: "Test Results",
                fields: [
                    { label: "Initial Setting Time (mins)", name: "initial_setting_time_mins", type: "text" },
                    { label: "Workability / Flow (mm)", name: "workability_flow_mm", type: "text" },
                    { label: "Image of Result (Workability)", name: "image_of_result_workability", type: "file" },
                    { label: "Fineness (% retained on 90µm)", name: "fineness_retained_on_90_m", type: "text", full: true },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Remarks (if any)", name: "remarks_if_any", type: "textarea", full: true },
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
                    { label: "Sand Dispatch Date", name: "sand_dispatch_date", type: "date" },
                    { label: "Supplier Name", name: "supplier_name", type: "text" },
                    { label: "Testing Date", name: "testing_date", type: "date" },
                    { label: "Sample No", name: "sample_no", type: "text" },
                ],
            },
            {
                title: "Sieve Readings",
                fields: [
                    { label: "1mm (gm)", name: "1mm_gm", type: "text" },
                    { label: "600 µm (gm)", name: "600_m_gm", type: "text" },
                    { label: "300 µm (gm)", name: "300_m_gm", type: "text" },
                    { label: "150 µm (gm)", name: "150_m_gm", type: "text" },
                    { label: "90 µm (gm)", name: "90_m_gm", type: "text" },
                    { label: "Weight in Pan (gm)", name: "weight_in_pan_gm", type: "text" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Image of Result", name: "image_of_result", type: "file" },
                    { label: "Remarks (if any)", name: "remarks_if_any", type: "textarea", full: true },
                    { label: "Status", name: "status", type: "status", full: true },
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
                    { label: "Adhesive Type", name: "adhesive_type", type: "text", full: true },
                ],
            },
            {
                title: "Sieve Readings",
                fields: [
                    { label: "1mm (gm)", name: "1mm_gm", type: "text" },
                    { label: "600 µm (gm)", name: "600_m_gm", type: "text" },
                    { label: "300 µm (gm)", name: "300_m_gm", type: "text" },
                    { label: "150 µm (gm)", name: "150_m_gm", type: "text" },
                    { label: "90 µm (gm)", name: "90_m_gm", type: "text" },
                    { label: "Weight in Pan (gm)", name: "weight_in_pan_gm", type: "text" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Upload File", name: "upload_file", type: "file" },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true },
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
                    { label: "Adhesive Type", name: "adhesive_type", type: "text" },
                ],
            },
            {
                title: "Inspection",
                fields: [
                    { label: "Visual Analysis", name: "visual_analysis", type: "textarea", full: true },
                    { label: "Visual Analysis File", name: "visual_analysis_file", type: "file" },
                    { label: "Lump Formation / Stickiness", name: "lump_formation_stickiness", type: "text" },
                    { label: "Lump Formation File", name: "lump_formation_file", type: "file", full: true },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true },
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
                    { label: "Initial Setting Time", name: "initial_setting_time", type: "text" },
                    { label: "Initial Setting File", name: "initial_setting_file", type: "file" },
                    { label: "Flow Test (mm)", name: "flow_test_mm", type: "text" },
                    { label: "Flow Test File", name: "flow_test_file", type: "file" },
                ],
            },
            {
                title: "Review",
                fields: [
                    { label: "Test Done By", name: "test_done_by", type: "text" },
                    { label: "Remarks", name: "remarks", type: "textarea", full: true },
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
                    { label: "Sample No", name: "sample_no", type: "text" },
                    { label: "Adhesive Type", name: "adhesive_type", type: "text" },
                    { label: "Adhesive Color", name: "adhesive_color", type: "text" },
                ],
            },
            {
                title: "Environment & Performance",
                fields: [
                    { label: "Temp (°C)", name: "temp_c", type: "text" },
                    { label: "Humidity (%)", name: "humidity", type: "text" },
                    { label: "Slip Resistance", name: "slip_resistance", type: "text" },
                    { label: "Open Time", name: "open_time", type: "text" },
                    { label: "Adjustment Time", name: "adjustment_time", type: "text", full: true },
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
};

