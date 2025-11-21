// -------------------------
// DOWNLOAD RESUME AS PDF
// -------------------------
function downloadResume() {
    const element = document.getElementById("resume-content");

    const options = {
        margin: 0.2,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, scrollY: 0 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
}

// -------------------------
// DOWNLOAD BIODATA AS PDF
// -------------------------
function downloadBiodata() {
    const element = document.getElementById("biodata-content");

    const options = {
        margin: 0.2,
        filename: "My_Biodata.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, scrollY: 0 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
}
