"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { MultiSelect } from "@/components/multi-select";

const companies = [
  { label: "Reliance Industries", value: "RELIANCE" },
  { label: "TCS", value: "TCS" },
  { label: "HDFC Bank", value: "HDFCBANK" },
  { label: "Infosys", value: "INFY" },
  { label: "ICICI Bank", value: "ICICIBANK" },
];

const formSchema = z
  .object({
    amount: z.string().min(1, "Amount is required"),
    investmentType: z.string().min(1, "Investment type is required"),
    basketOrder: z.boolean(),
    riskPreference: z.number(),
    duration: z.string().min(1, "Duration is required"),
    // Conditional basket fields
    basketName: z.string().optional(),
    basketLimit: z.number().optional(),
    companies: z.array(z.string()).optional(),
  })
  .refine(
    (data) => {
      if (data.basketOrder) {
        return data.basketName && data.basketLimit && data.companies?.length;
      }
      return true;
    },
    {
      message: "Basket details are required when basket order is enabled",
    }
  );

export function InvestmentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      investmentType: "",
      basketOrder: false,
      riskPreference: 50,
      duration: "",
      basketName: "",
      basketLimit: 0,
      companies: [], // ensure it's initialized as an empty array
    },
  });

  const [basketOrder, setBasketOrder] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Success",
      description: "Investment submitted successfully",
    });
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="investmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="one-time">
                        One-Time Investment
                      </SelectItem>
                      <SelectItem value="sip">SIP</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="basketOrder"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Basket Order</FormLabel>
                    <div className="text-sm text-muted-foreground">
                      Enable to create a custom basket
                    </div>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        setBasketOrder(checked);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {basketOrder && (
            <AnimatePresence initial={false}>
              <motion.div
                key="basket-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                    height: {
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                    height: {
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  },
                }}
                className="space-y-6 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1, duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.2 },
                  }}
                >
                  <FormField
                    control={form.control}
                    name="basketName"
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
                    name="companies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Companies</FormLabel>
                        <FormControl>
                          <MultiSelect
                            options={companies}
                            placeholder="Select companies..."
                            defaultValue={field.value}
                            onValueChange={(values) => {
                              field.onChange(values);
                            }}
                            maxCount={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Existing risk preference and duration fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="riskPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risk Preference</FormLabel>
                  <FormControl>
                    <Slider
                      value={[field.value]}
                      onValueChange={([value]) => field.onChange(value)}
                      max={100}
                      step={1}
                    />
                  </FormControl>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low Risk</span>
                    <span>High Risk</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Duration</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="short">Short Term</SelectItem>
                      <SelectItem value="mid">Mid Term</SelectItem>
                      <SelectItem value="long">Long Term</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Investment
          </Button>
        </form>
      </Form>
    </Card>
  );
}
