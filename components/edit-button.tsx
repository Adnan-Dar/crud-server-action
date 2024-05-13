import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Button as shadButton } from "@/components/ui/button";
  
  import Button from "./custom-button";
  import { Product } from "@/types/product";
  import { update } from "@/actions/products"; // Import the update function
  import { useForm } from "react-hook-form";
  
  interface EditButtonProps {
    label: string;
    openSideDrawer: (product: Product) => void;
    product: Product;
  }
  export const EditButton = ({
    label,
    openSideDrawer,
    product,
  }: EditButtonProps) => {
    const handleClick = () => {
      openSideDrawer(product);
    };
  
    const onSubmit = async (data: Product) => {
      try {
        // Call the update function from the API module
        await update(data.id, data); // Assuming update function accepts id and updated data
        console.log("Data updated successfully");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    };
  
    const form = useForm({
      defaultValues: product, // Set default form values to the product data
    });
  
    return (
      <Sheet>
        <SheetTrigger>
          <Button label={label} onClick={handleClick} />
        </SheetTrigger>
        <SheetContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID</FormLabel>
                    <FormControl>
                      <Input placeholder="id" {...field} readOnly />
                      {/* Set the ID input field as readOnly */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
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
                      <Input placeholder="price" {...field} />
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
                      <Input placeholder="category" {...field} />
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
  