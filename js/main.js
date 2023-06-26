const url = "../assets/docs/sample.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.getElementById("pdf-render"),
  ctx = canvas.getContext("2d");

//   Render Page

const renderPage = (num) => {};

// Get Document

pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
  pdfDoc = pdfDoc_;
  console.log(pdfDoc);
});
