"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const companies = [
  { label: "Reliance Industries", value: "RELIANCE" },
  { label: "TCS", value: "TCS" },
  { label: "HDFC Bank", value: "HDFCBANK" },
  { label: "Infosys", value: "INFY" },
  { label: "ICICI Bank", value: "ICICIBANK" },
  // Add more companies as needed
];

const formSchema = z.object({
  name: z.string().min(1, "Basket name is required"),
  limit: z.number().min(1000, "Minimum limit is ₹1,000"),
  companies: z.array(z.string()).min(1, "Select at least one company"),
});

export function CreateBasketForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      limit: 0,
      companies: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here you would typically make an API call to create the basket
    console.log(values);
    toast({
      title: "Success",
      description: "Basket created successfully",
    });
    form.reset();
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Basket</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Basket Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter basket name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="limit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Limit (₹)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter limit amount"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Companies</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1">
                      {field.value.map((company) => (
                        <Badge key={company} variant="secondary">
                          {companies.find((c) => c.value === company)?.label}
                          <button
                            type="button"
                            className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            onClick={() => {
                              const newValue = field.value.filter(
                                (v) => v !== company
                              );
                              field.onChange(newValue);
                            }}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <Command className="border rounded-md">
                      <CommandInput placeholder="Search companies..." />
                      <CommandEmpty>No companies found.</CommandEmpty>
                      <ScrollArea className="h-40">
                        <CommandGroup>
                          {companies.map((company) => (
                            <CommandItem
                              key={company.value}
                              onSelect={() => {
                                const currentValue = new Set(field.value);
                                if (currentValue.has(company.value)) {
                                  currentValue.delete(company.value);
                                } else {
                                  currentValue.add(company.value);
                                }
                                field.onChange(Array.from(currentValue));
                              }}
                            >
                              {company.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </ScrollArea>
                    </Command>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Create Basket
          </Button>
        </form>
      </Form>
    </Card>
  );
}
