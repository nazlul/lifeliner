import jsPDF from "jspdf";

export const generateCertificate = (name: string) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: "a4",
  });

  const certWidth = 842; 
  const certHeight = 595; 

  const image = new Image();
  image.src = "/certificate-template.png";

  image.onload = () => {
    doc.addImage(image, "PNG", 0, 0, certWidth, certHeight);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(32);
    doc.text(name, certWidth / 2, 300, { align: "center" });

    doc.setFontSize(16);
    doc.text("has successfully passed the quiz", certWidth / 2, 340, { align: "center" });

    doc.save(`certificate-${name}.pdf`);
  };
};
