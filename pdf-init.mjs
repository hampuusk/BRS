// PDF reader (pdf.js), served from the app itself
import * as pdfjsLib from "./pdf.min.mjs";
const here = p => new URL(p, import.meta.url).href;
pdfjsLib.GlobalWorkerOptions.workerSrc = here("./pdf.worker.min.mjs");
window.PDF_ASSETS = { standardFontDataUrl: here("./"), wasmUrl: here("./"), iccUrl: here("./") };
window.pdfjsLib = pdfjsLib;
