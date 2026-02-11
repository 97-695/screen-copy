import { Star, ThumbsUp } from "lucide-react";
import fernandaImg from "@/assets/review-fernanda.png";
import anapaulaImg from "@/assets/review-anapaula.png";
import carlosImg from "@/assets/review-carlos.png";
import robertoImg from "@/assets/review-roberto.png";
import marianaImg from "@/assets/review-mariana.png";
import reviewPhoto1 from "@/assets/review-photo-1.png";
import reviewPhoto2 from "@/assets/review-photo-2.png";
import reviewPhoto3 from "@/assets/review-photo-3.png";

interface Review {
  name: string;
  stars: number;
  date: string;
  variation: string;
  text: string;
  helpful: number;
  avatar: string;
  photos?: string[];
}

const reviews: Review[] = [
  {
    name: "Fernanda C.",
    stars: 5,
    date: "2026-01-15 12:15",
    variation: "220V",
    text: "Produto de qualidade! Chegou muito bem embalado e a instalação foi tranquila. Funciona perfeitamente, tanto no frio quanto no quente. Recomendo!",
    helpful: 189,
    avatar: fernandaImg,
    photos: [reviewPhoto1],
  },
  {
    name: "Carlos M.",
    stars: 5,
    date: "2026-01-22 09:30",
    variation: "110V",
    text: "Excelente custo-benefício! Silencioso e econômico. Já é o segundo que compro, dessa vez para o quarto. Entrega rápida!",
    helpful: 142,
    avatar: carlosImg,
    photos: [reviewPhoto2],
  },
  {
    name: "Ana Paula S.",
    stars: 5,
    date: "2026-01-10 16:45",
    variation: "220V",
    text: "Melhor compra que fiz! O ar gela muito rápido e o controle remoto é super prático. Veio com brinde também. Super satisfeita!",
    helpful: 97,
    avatar: anapaulaImg,
    photos: [reviewPhoto3],
  },
  {
    name: "Roberto F.",
    stars: 5,
    date: "2026-02-01 14:20",
    variation: "110V",
    text: "Muito bom! Instalação simples e o aparelho é bem silencioso. Resfria o ambiente rapidamente. Recomendo demais!",
    helpful: 76,
    avatar: robertoImg,
  },
  {
    name: "Mariana L.",
    stars: 5,
    date: "2026-02-05 11:00",
    variation: "220V",
    text: "Adorei! Design bonito e funciona super bem. O controle remoto facilita muito. Chegou antes do prazo!",
    helpful: 63,
    avatar: marianaImg,
  },
];

const SocialProof = () => {
  return (
    <div className="bg-card px-4 py-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-foreground">Avaliações dos Clientes</h2>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="text-sm font-bold text-foreground">4.9</span>
          <span className="text-xs text-muted-foreground">(2.847)</span>
        </div>
      </div>

      <div className="space-y-3">
        {reviews.map((review) => (
          <div key={review.name} className="rounded-xl border border-border bg-background p-3">
            <div className="mb-1 flex items-center gap-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mb-1 text-[10px] text-muted-foreground">
              {review.date} | Variação: ⚡ {review.variation}
            </p>
            <p className="mb-2 text-xs leading-relaxed text-foreground">{review.text}</p>
            {review.photos && review.photos.length > 0 && (
              <div className="mb-2 flex gap-2">
                {review.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt="Foto do produto"
                    className="h-20 w-20 rounded-lg object-cover border border-border"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ThumbsUp className="h-3.5 w-3.5" />
              Útil ({review.helpful})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
