import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageContainer";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";

async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, price, description, featured } = product;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">تعديل منتج</h1>
      <div className="border p-8 rounded-md">
        <div className="border p-8 rounded-md">
          <ImageInputContainer
            action={updateProductImageAction}
            name={name}
            image={product.image}
            text="تغيير الصورة"
          >
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="url" value={product.image} />
          </ImageInputContainer>
        </div>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="اسم المنتج"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="الشركة"
              defaultValue={company}
            />

            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="وصف المنتج"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="مميز"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="تحديث المنتج" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;
