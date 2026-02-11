import { X, Zap, Gift } from "lucide-react";
import { useState } from "react";
import produtoImg from "@/assets/produto-principal.png";

interface VoltageModalProps {
  open: boolean;
  onClose: () => void;
}

const VoltageModal = ({ open, onClose }: VoltageModalProps) => {
  const [voltage, setVoltage] = useState<"110V" | "220V">("110V");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/50">
      <div className="w-full rounded-t-2xl bg-card px-5 pb-6 pt-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground">
            Selecione a voltagem
          </h3>
          <button onClick={onClose} className="rounded-full p-1 text-muted-foreground hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Product */}
        <div className="mb-4 flex flex-col items-center">
          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-flash px-3 py-1 text-xs font-bold text-primary-foreground">
            🔥 MAIS VENDIDO
          </span>
          <img src={produtoImg} alt="Ar-Condicionado" className="mb-3 h-36 w-auto object-contain" />
          <p className="mb-2 text-center text-sm text-muted-foreground">
            Ar-Condicionado Split Inverter Hisense 12.000 BTUs Frio/Quente
          </p>
          <p className="text-2xl font-black text-price">R$ 86,63</p>
          <p className="text-sm text-old-price line-through">R$ 1086,63</p>
          <span className="mt-1 rounded-full border border-primary px-2.5 py-0.5 text-xs font-bold text-primary">
            92% OFF
          </span>
        </div>

        {/* Voltage selector */}
        <p className="mb-2 flex items-center gap-1 text-sm font-medium text-foreground">
          <Zap className="h-4 w-4 text-primary" />
          Voltagem: {voltage}
        </p>
        <div className="mb-4 grid grid-cols-2 gap-3">
          {(["110V", "220V"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setVoltage(v)}
              className={`flex items-center justify-center gap-2 rounded-xl border-2 py-3 text-sm font-semibold transition-all ${
                voltage === v
                  ? "border-primary bg-flash-light text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              <Zap className="h-4 w-4" />
              {v}
              {voltage === v && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Brinde */}
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-flash-light p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Gift className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-bold text-primary">BRINDE EXCLUSIVO!</span>
        </div>

        {/* Confirm */}
        <button className="w-full rounded-xl bg-flash py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]">
          Confirmar - R$ 86,63
        </button>
      </div>
    </div>
  );
};

export default VoltageModal;
