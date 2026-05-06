export const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
    });

export const preparePayload = async (formData: any) => {
    const data: any = { ...formData };

    const fileMap = [
        "image_of_result_workability",
        "luss_formation_file",
        "visual_analysis_file",
    ];

    for (const key of fileMap) {
        if (data[key] instanceof File) {
            data[key] = await toBase64(data[key]);
        }
    }

    return data;
};