import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import Button from "./custom-button";
  import { Product } from "@/types/product";
  import { create } from "@/actions/products";
  import { useForm } from "react-hook-form";
  
  interface AddProductProps {
    label: string;
  }
  
  export const AddProduct = ({ label }: AddProductProps) => {
    const onSubmit = async (data: Product) => {
      try {
        await create(data); // Call the create function from the API module
        console.log("Product created successfully");
      } catch (error) {
        console.error("Error creating product:", error);
      }
    };
  
    const form = useForm();
  
    return (
      <Sheet>
        <SheetTrigger>
          <Button label={label} />
        </SheetTrigger>
        <SheetContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button className="border-2 p-1 rounded-lg" type="submit">
                Submit
              </button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    );
  };
  