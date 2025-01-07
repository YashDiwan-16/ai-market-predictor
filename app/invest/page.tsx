import { InvestmentForm } from "@/components/InvestmentForm";
import InvestPage from "@/components/motion/InvestPage";

export default function InvestWithAI() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <InvestPage>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            AI-Powered Investment
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Let AI grow your wealth seamlessly
          </p>
        </InvestPage>

        <InvestmentForm />
      </div>
    </div>
  );
}
