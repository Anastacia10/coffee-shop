import { Schema, Document, model, Model } from "mongoose";
import { IProduct } from "types/product";

interface IProductSchema extends Document, IProduct {
  userId: Schema.Types.ObjectId;
  overallScore: number;
}

interface IProductModel extends Model<IProductSchema> {
  getAllProducts(): Promise<IProduct[]>;
}

const productSchema = new Schema<IProductSchema>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  overallScore: {
    type: Number,
    required: true,
  },
  numberOfReview: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

productSchema.statics.getAllProducts = async function (): Promise<IProduct[]> {
  try {
    const products = await model<IProductSchema>("Product")
      .find()
      .select("-id -overallScore");
    return products;
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw new Error("Could not retrieve products");
  }
};

const Product = model<IProductSchema, IProductModel>("Product", productSchema);

export default Product;
