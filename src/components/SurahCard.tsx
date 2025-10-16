import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface SurahCardProps {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function SurahCard({
  number,
  name,
  englishName,
  englishNameTranslation,
  numberOfAyahs,
  revelationType,
}: SurahCardProps) {
  return (
    <Link to={`/surah/${number}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer glass-effect">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {number}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{englishName}</h3>
                <p className="text-sm text-muted-foreground">
                  {englishNameTranslation} • {numberOfAyahs} Ayahs • {revelationType}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="arabic-text text-2xl">{name}</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}