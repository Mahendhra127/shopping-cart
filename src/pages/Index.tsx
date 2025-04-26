
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { ShoppingCart } from "lucide-react";

const Index = () => {
  const { toggleCart, items } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <Button onClick={toggleCart} variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Index;
