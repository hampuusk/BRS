// PDF reader (pdf.js), served from the app itself
import * as pdfjsLib from "./pdf.min.mjs";
const here = p => new URL(p, import.meta.url).href;
pdfjsLib.GlobalWorkerOptions.workerSrc = here("./pdf.worker.min.mjs");
window.PDF_ASSETS = { cMapUrl: here("./cmaps/"), cMapPacked: true, standardFontDataUrl: here("./standard_fonts/"), wasmUrl: here("./wasm/"), iccUrl: here("./iccs/") };
window.pdfjsLib = pdfjsLib;
