import { CreateBasketForm } from "@/components/CreateBasketForm";
import { Card } from "@/components/ui/card";
import { baskets } from "@/data/baskets";

export default function BasketsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Investment Baskets
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Existing Baskets</h2>
            {baskets.map((basket) => (
              <Card key={basket.id} className="p-4 mb-4">
                <h3 className="font-bold">{basket.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Limit: ₹{basket.limit}
                </p>
                <p className="text-sm text-muted-foreground">
                  Available: ₹{basket.limit - basket.currentBalance}
                </p>
              </Card>
            ))}
          </div>

          <div>
            <CreateBasketForm />
          </div>
        </div>
      </div>
    </div>
  );
}
