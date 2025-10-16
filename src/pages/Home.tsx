import { useState, useEffect } from "react";
import SurahCard from "@/components/SurahCard";
import { Loader2 } from "lucide-react";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function Home() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSurahs(data.data);
        } else {
          setError("Failed to load Surahs");
        }
      })
      .catch(() => setError("Failed to load Surahs"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2">القرآن الكريم</h2>
        <p className="text-xl text-muted-foreground">The Holy Qur'an</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {surahs.map((surah) => (
          <SurahCard key={surah.number} {...surah} />
        ))}
      </div>
    </div>
  );
}