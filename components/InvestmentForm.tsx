"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

export function InvestmentForm() {
  const [formData, setFormData] = useState({
    amount: "",
    investmentType: "",
    basketOrder: false,
    riskPreference: 50,
    duration: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Investment Amount */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Investment Amount</label>
              <Input
                type="number"
                min="0"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>

            {/* Investment Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Investment Type</label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, investmentType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-time">One-Time Investment</SelectItem>
                  <SelectItem value="sip">SIP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Basket Order */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Enable Basket Order</label>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.basketOrder}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, basketOrder: checked })
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {formData.basketOrder ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

            {/* Risk Preference */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Risk Preference</label>
              <Slider
                value={[formData.riskPreference]}
                onValueChange={([value]) =>
                  setFormData({ ...formData, riskPreference: value })
                }
                max={100}
                step={1}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low Risk</span>
                <span>High Risk</span>
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Investment Duration</label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, duration: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short Term</SelectItem>
                  <SelectItem value="mid">Mid Term</SelectItem>
                  <SelectItem value="long">Long Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Submit Investment
            </Button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
}
