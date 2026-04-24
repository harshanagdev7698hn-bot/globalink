import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  countryCode: { type: String, required: true }, // ISO-3166-1 alpha-2 ("IN","US","AE",...)
});

const DocumentSchema = new Schema({
  kind: { type: String, required: true },          // "LICENSE","CERT","ID","GST","VAT"
  number: String,                                   // eg: GSTIN, VAT ID, License #
  countryCode: String,
  fileUrl: String,                                  // S3/Cloudinary/etc
  verifiedAt: Date,
});

const PricingSchema = new Schema({
  currency: { type: String, required: true },       // "INR","USD","EUR"
  rateType: { type: String, enum: ["hour","day","fixed"], default: "hour" },
  amountMinor: { type: Number, default: 0 },        // store cents/paise
});

const AvailabilitySchema = new Schema({
  timezone: { type: String, required: true },       // "Asia/Kolkata"
  weekly: {                                         // simple: 0..6 arrays of slots
    mon: [String], tue: [String], wed: [String], thu: [String],
    fri: [String], sat: [String], sun: [String],
  },
});

const ConsultantSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, index: true }, // link to auth user
    displayName: { type: String, required: true },
    headline: String,                          // short line under name
    bio: String,                               // long description
    email: { type: String, required: true, index: true },
    phoneE164: String,                         // +91..., validated with libphonenumber
    website: String,
    languages: [String],                       // ["en","hi","ar","fr"]
    categories: [String],                      // ["BIS","ISO 9001","Medical Devices","GeM"]
    industries:  [String],                     // ["Pharma","Food","Textile","IT"]
    remoteOK: { type: Boolean, default: true },
    onSiteCountries: [String],                 // where they can travel physically
    address: AddressSchema,
    documents: [DocumentSchema],
    pricing: PricingSchema,
    availability: AvailabilitySchema,
    avgRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    status: { type: String, enum: ["draft","pending","approved","suspended"], default: "pending" },
  },
  { timestamps: true }
);

export default models.Consultant || model("Consultant", ConsultantSchema);
