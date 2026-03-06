"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Product = {
  id: string;
  title: string;
  category?: "Book" | "Calendar";
  description?: string;
  priceCents: number;
  imageUrl?: string;
};

type CartItem = Product & { qty: number };

const GOLD = "#D4AF37";

/* ---------------- Delivery Calculator ---------------- */

function calculateDelivery(cart: CartItem[]) {
  let delivery = 0;

  cart.forEach((item) => {
    const qty = item.qty;

    if (item.category === "Book") {
      const price = item.priceCents / 100;

      if (price >= 20 && price <= 50) {
        if (qty === 1) delivery += 50;
        else if (qty <= 5) delivery += 100;
        else delivery += qty * 20;
      }

      if (price > 50 && price <= 200) {
        if (qty === 1) delivery += 100;
        else if (qty > 5) delivery += qty * 50;
      }
    }

    if (item.category === "Calendar") {
      delivery += qty * 100;
    }
  });

  return delivery;
}

/* ---------------- Premium Sparkle Background ---------------- */
function Sparkles() {
  const sparkles = Array.from({ length: 1000 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {sparkles.map((_, i) => {
        const size = Math.random() * 3 + 1;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
              boxShadow: "0 0 8px rgba(212,175,55,0.8)",
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
/* ---------------- Razorpay Loader ---------------- */

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      return resolve(true);
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

export default function SahityaPage() {

  const [items, setItems] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<"All" | "Book" | "Calendar">("All");

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  /* ---------------- Fetch Products ---------------- */

  useEffect(() => {
    const load = async () => {

      try {
        const res = await fetch("https://jinsharnammedia.com/api/products");
        const data = await res.json();

        const products = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : [];

        setItems(products);
        setFiltered(products);

      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* ---------------- Cart Storage ---------------- */

  useEffect(() => {
    const saved = localStorage.getItem("sahitya_cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("sahitya_cart", JSON.stringify(cart));
  }, [cart]);

  /* ---------------- Filter ---------------- */

  useEffect(() => {

    let result = [...items];

    if (selectedCategory !== "All") {
      result = result.filter((i) => i.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter((i) => i.title.toLowerCase().includes(q));
    }

    setFiltered(result);

  }, [items, selectedCategory, searchTerm]);

  /* ---------------- Cart Logic ---------------- */

  const addToCart = (product: Product) => {

    setCart((prev) => {

      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];

    });

  };

  const decreaseQty = (id: string) => {

    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty > 1 ? p.qty - 1 : 0 } : p
        )
        .filter((p) => p.qty > 0)
    );

  };

  const cartAmount = cart.reduce((sum, p) => sum + p.priceCents * p.qty, 0);
  const deliveryCharge = calculateDelivery(cart);
  const grandTotal = cartAmount + deliveryCharge * 100;

  /* ---------------- Checkout ---------------- */

  const handleCheckout = async () => {
    if (!name || !phone || !address || !city || !pincode) {
      alert("Please fill delivery details");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const loaded = await loadRazorpayScript();

    if (!loaded) {
      alert("Unable to load Razorpay");
      return;
    }

    try {

      const res = await fetch(
        "https://jinsharnammedia.com/api/public/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart,
            deliveryCharge,
            totalAmount: grandTotal,
            name,
            phone,
            address,
            city,
            pincode
          }),
        }
      );

      const data = await res.json();

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Pulak Sagar Sahitya",
        order_id: data.id,

        handler: async function (response: any) {

          const verifyRes = await fetch(
            "https://jinsharnammedia.com/api/public/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                items: cart,
                deliveryCharge,
                name,
                phone,
                address,
                city,
                pincode
              }),
            }
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {

            localStorage.removeItem("sahitya_cart");
            window.location.href = "/sahitya/success";

          } else {

            alert("Payment verification failed.");

          }
        },

        theme: { color: GOLD },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {

      console.error("Checkout error:", error);
      alert("Checkout failed");

    }
  };

  /* ---------------- Loading ---------------- */

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-800 rounded-2xl h-72" />
        ))}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-[#D4AF37]">
      {/* Sparkles */}
      <Sparkles />

      {/* HERO */}
      <section className="relative py-28 text-center border-b border-[#D4AF37]/30 overflow-hidden">

        {/* subtle golden glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>

        <div className="relative z-20">

          <h1 className="text-5xl md:text-5xl font-serif font-semibold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#f5d97b] bg-clip-text text-transparent">
            Pulak Sagar Ji Sahitya
          </h1>

          {/* golden divider */}
          <div className="flex justify-center mb-5">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          <p className="max-w-2xl mx-auto text-[#D4AF37]/80 text-lg leading-relaxed">
            Sacred literature and spiritual teachings of  
            <span className="text-[#D4AF37] font-semibold">
              {" "}Muni Shri Pulak Sagar Ji Maharaj
            </span>
          </p>

        </div>

      </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          <div className="flex gap-4 flex-wrap">

            {(["All", "Book", "Calendar"] as const).map((cat) => {

              const active = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-7 py-2.5 rounded-full font-semibold tracking-wide
                    transition-all duration-300
                    border
                    ${
                      active
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#f5d97b] text-black border-transparent shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105"
                        : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    }
                  `}
                >
                  {cat}
                </button>
              );

            })}

          </div>

          <div className="relative w-full md:w-72">

            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <input
              type="text"
              placeholder="Search books or calendars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                bg-black
                border border-[#D4AF37]
                rounded-full
                pl-11 pr-4
                py-2.5
                text-[#D4AF37]
                placeholder-[#D4AF37]/50
                focus:outline-none
                focus:ring-2
                focus:ring-[#D4AF37]
                focus:shadow-[0_0_15px_rgba(212,175,55,0.7)]
                transition
              "
            />

          </div>
        </div>

        {/* PRODUCTS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filtered.map((p) => (

            <div
              key={p.id}
              className="bg-gradient-to-b from-[#D4AF37] to-[#f5d97b] text-black rounded-2xl p-5 shadow-xl hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] transition duration-300"
            >

              <Link href={`/sahitya/${p.id}`}>
                <img
                  src={
                    p.imageUrl
                      ? `https://jinsharnammedia.com${p.imageUrl}`
                      : "/images/default.jpg"
                  }
                  className="rounded-lg h-56 w-full object-cover mb-4 shadow-md"
                />
              </Link>

              <h3 className="text-center font-serif text-lg font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-center mb-3 text-lg font-bold">
                ₹ {(p.priceCents / 100).toFixed(2)}
              </p>

              <button
                onClick={() => addToCart(p)}
                className="w-full bg-black text-[#D4AF37] py-2 rounded-lg font-semibold hover:bg-[#111] transition"
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>
      </section>

      {/* CART BUTTON */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-22 right-8 bg-gradient-to-r from-[#D4AF37] to-[#f5d97b] text-black px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition font-semibold"
      >
        🛒 {cart.reduce((s, i) => s + i.qty, 0)}
      </button>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* CART DRAWER */}
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-gradient-to-b from-black via-[#0b0b0b] to-black border-l border-[#D4AF37] shadow-2xl z-50 transform transition duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="p-6 border-b border-[#D4AF37] flex justify-between items-center">
          <h3 className="text-xl font-serif text-[#D4AF37]">
          🛒 Your Cart
          </h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#D4AF37] hover:text-white text-xl"
          >
          ✕
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          <div className="space-y-3 border-b border-[#D4AF37] pb-4">

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full bg-black border border-[#D4AF37] rounded p-2 text-[#D4AF37]"
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full bg-black border border-[#D4AF37] rounded p-2 text-[#D4AF37]"
            />

            <textarea
              placeholder="Full Address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="w-full bg-black border border-[#D4AF37] rounded p-2 text-[#D4AF37]"
            />

            <input
              placeholder="City"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="w-full bg-black border border-[#D4AF37] rounded p-2 text-[#D4AF37]"
            />

            <input
              placeholder="Pincode"
              value={pincode}
              onChange={(e)=>setPincode(e.target.value)}
              className="w-full bg-black border border-[#D4AF37] rounded p-2 text-[#D4AF37]"
            />

          </div>

          {cart.map((p) => (

            <div
              key={p.id}
              className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-3"
            >
              <div>
                <p>{p.title}</p>

                <div className="flex gap-2 mt-1 items-center">
                  <button
                    onClick={() => decreaseQty(p.id)}
                    className="px-2 bg-[#D4AF37] text-black rounded"
                  >
                  −
                  </button>
                  <span>{p.qty}</span>
                  <button
                    onClick={() => addToCart(p)}
                    className="px-2 bg-[#D4AF37] text-black rounded"
                  >
                  +
                  </button>
                </div>
              </div>

              <p>
                ₹ {((p.priceCents * p.qty) / 100).toFixed(2)}
              </p>

            </div>

          ))}

        </div>

        {cart.length > 0 && (

          <div className="p-6 border-t border-[#D4AF37] bg-black/80">

            <p className="flex justify-between mb-4 text-lg font-semibold">
              <span>Total</span>
              <span>₹ {(grandTotal / 100).toFixed(2)}</span>
            </p>

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#f5d97b] text-black py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
            >
              Checkout
            </button>

          </div>

        )}

      </div>

    </main>
  );
}