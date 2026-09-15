import { Box, Candy, Cookie, Cross, Layers3, Pill, Sparkles } from "lucide-react";

const makeCategory = (id, number, title, icon, description, packagingTypes, printingOptions, finishingOptions, applications) => ({ id, number, title, icon, description, packagingTypes, printingOptions, finishingOptions, applications });

export const categories = [
  makeCategory("pharmaceutical", "01", "Pharmaceutical", Pill, "Clear, considered packaging for healthcare products.", ["Mono cartons", "Blister cartons"], ["Offset", "UV"], ["Foil", "Texture"], ["Tablets", "Syrups", "Creams"]),
  makeCategory("masala", "02", "Masala", Sparkles, "Shelf-ready cartons for spices and food ranges.", ["Folding cartons", "Retail boxes"], ["Offset", "Texture"], ["Matte", "Gloss"], ["Spices", "Food mixes"]),
  makeCategory("chocolate", "03", "Chocolate", Candy, "Premium box formats for confectionery presentation.", ["Gift boxes", "Sleeves"], ["Offset", "UV"], ["Foil", "Emboss"], ["Bars", "Pralines"]),
  makeCategory("cigarette", "04", "Cigarette", Box, "Generic, unbranded package formats with precise structure.", ["Pack cartons"], ["Offset"], ["Foil", "Matte"], ["Retail packs"]),
  makeCategory("biscuit", "05", "Biscuit", Cookie, "Retail packaging that works on shelf and in transit.", ["Cartons", "Handle boxes"], ["Offset"], ["Gloss", "Texture"], ["Cookies", "Biscuits"]),
  makeCategory("foiling", "06", "Foiling", Layers3, "Metallic foil and medical wrapper applications.", ["Wrappers", "Foil rolls"], ["Foil print"], ["Metallic"], ["Medical", "Retail"]),
  makeCategory("corrugated", "07", "Corrugated", Cross, "Strong printed boxes for transport and industrial needs.", ["Shipping boxes", "Display boxes"], ["Corrugated print"], ["Protective coat"], ["Shipping", "Industrial"]),
];
