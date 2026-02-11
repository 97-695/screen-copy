import { useState, useEffect } from "react";
import { X, Share2, ShoppingCart, MoreHorizontal, ChevronLeft, ChevronRight, Zap, Store, MessageCircle } from "lucide-react";
import produtoImg from "@/assets/produto-principal.png";
import controleImg from "@/assets/controle-remoto.png";
import DiscountPopup from "./DiscountPopup";
import VoltageModal from "./VoltageModal";

const ProductPage = () => {
  const [showDiscount, setShowDiscount] = useState(true);
  const [showVoltage, setShowVoltage] = useState(false);
  const [timer, setTimer] = useState(38 * 60 + 15);

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `00:${m}:${sec}`;
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-md flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="text-foreground">
          <X className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-4">
          <Share2 className="h-5 w-5 text-foreground" />
          <ShoppingCart className="h-5 w-5 text-foreground" />
          <MoreHorizontal className="h-5 w-5 text-foreground" />
        </div>
      </div>

      {/* Product image */}
      <div className="relative bg-card px-4 py-8">
        <button className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-1 shadow">
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        <img src={produtoImg} alt="Ar-Condicionado" className="mx-auto h-52 w-auto object-contain" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-1 shadow">
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
        {/* Dot indicator */}
        <div className="mt-4 flex justify-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
      </div>

      {/* Price section */}
      <div className="bg-flash px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="badge-discount">-92%</span>
            <span className="text-2xl font-black text-primary-foreground">R$ 86,63</span>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs font-semibold text-primary-foreground">
              <Zap className="h-3.5 w-3.5" />
              Oferta Relâmpago
            </div>
            <p className="text-xs text-primary-foreground/80">
              Termina em {formatTime(timer)}
            </p>
          </div>
        </div>
        <div className="mt-1">
          <span className="text-xs text-primary-foreground/70 line-through">R$ 1.086,63</span>
        </div>
      </div>

      {/* Installment */}
      <div className="bg-card px-4 py-2.5 text-sm">
        <span className="text-muted-foreground">🗓 1x </span>
        <span className="font-semibold text-foreground">R$ 86,63</span>
        <span className="ml-1 font-medium text-green-600">sem juros</span>
      </div>

      {/* Title */}
      <div className="flex-1 bg-card px-4 py-3">
        <h1 className="text-base font-medium leading-snug text-foreground">
          Ar-Condicionado Split Inverter Hisense 9.000 BTUs Frio/Quente | Silencioso, Econômico, Fácil Instalação e
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="sticky bottom-0 flex items-center border-t border-border bg-card">
        <button className="flex flex-col items-center px-4 py-2 text-muted-foreground">
          <Store className="h-5 w-5" />
          <span className="text-[10px]">Loja</span>
        </button>
        <button className="flex flex-col items-center px-4 py-2 text-muted-foreground">
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px]">Chat</span>
        </button>
        <button className="flex-1 py-3.5 text-sm font-semibold text-foreground">
          Adicionar ao carrinho
        </button>
        <button
          onClick={() => setShowVoltage(true)}
          className="flex-1 bg-flash py-3.5 text-sm font-bold text-primary-foreground"
        >
          Comprar com cupom
        </button>
      </div>

      {/* Modals */}
      <DiscountPopup
        open={showDiscount}
        onClose={() => setShowDiscount(false)}
        onApply={() => setShowDiscount(false)}
      />
      <VoltageModal open={showVoltage} onClose={() => setShowVoltage(false)} />
    </div>
  );
};

export default ProductPage;
