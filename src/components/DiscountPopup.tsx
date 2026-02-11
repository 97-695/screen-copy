import { X, CheckCircle, Zap } from "lucide-react";

interface DiscountPopupProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
}

const DiscountPopup = ({ open, onClose, onApply }: DiscountPopupProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="relative w-full max-w-sm rounded-2xl bg-card p-6 pt-10 text-center shadow-2xl">
        {/* Sparkles */}
        <span className="absolute left-6 top-4 text-xl">✨</span>
        <span className="absolute right-6 top-4 text-xl">✨</span>

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
          <CheckCircle className="h-4 w-4" />
          Cupom Aplicado!
        </div>

        <h2 className="mb-1 text-xl font-bold text-foreground">
          Você ganhou um desconto!
        </h2>
        <p className="mb-4 text-sm text-primary font-medium">
          Oferta exclusiva do aplicativo
        </p>

        {/* Big discount */}
        <div className="mb-1">
          <span className="text-7xl font-black text-primary">92%</span>
          <span className="ml-2 inline-block rounded-full bg-primary/15 px-3 py-1 text-sm font-bold text-primary">
            OFF
          </span>
        </div>
        <p className="mb-6 text-sm text-muted-foreground">de desconto aplicado</p>

        {/* Benefits */}
        <div className="mb-6 space-y-3 text-left">
          {[
            "Frete grátis para todo Brasil",
            "Garantia estendida de 1 ano",
            "Brinde exclusivo incluso",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2.5">
              <CheckCircle className="h-5 w-5 shrink-0 fill-primary text-primary-foreground" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onApply}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-flash py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
        >
          <Zap className="h-5 w-5" />
          Aproveitar Agora
        </button>

        <p className="flex items-center justify-center gap-1 text-xs text-primary font-medium">
          <Zap className="h-3.5 w-3.5" />
          Restam poucas unidades com este preço
        </p>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DiscountPopup;
