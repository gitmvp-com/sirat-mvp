import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: Ayah[];
}

interface Translation {
  text: string;
  numberInSurah: number;
}

export default function SurahDetail() {
  const { number } = useParams<{ number: string }>();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [translation, setTranslation] = useState<Translation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!number) return;

    setLoading(true);
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${number}`).then((res) => res.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${number}/en.sahih`).then((res) => res.json()),
    ])
      .then(([arabicData, englishData]) => {
        if (arabicData.code === 200 && englishData.code === 200) {
          setSurah(arabicData.data);
          setTranslation(englishData.data.ayahs);
        } else {
          setError("Failed to load Surah");
        }
      })
      .catch(() => setError("Failed to load Surah"))
      .finally(() => setLoading(false));
  }, [number]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-destructive">{error || "Surah not found"}</p>
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-6">
        <Button variant="outline">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Surahs
        </Button>
      </Link>

      <Card className="mb-8 glass-effect">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-4xl font-bold arabic-text">{surah.name}</h1>
          </div>
          <CardTitle className="text-2xl">{surah.englishName}</CardTitle>
          <p className="text-muted-foreground">
            {surah.englishNameTranslation} • {surah.numberOfAyahs} Ayahs • {surah.revelationType}
          </p>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {surah.ayahs.map((ayah, index) => (
          <Card key={ayah.number} className="glass-effect">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                  {ayah.numberInSurah}
                </div>
                <p className="arabic-text flex-1">{ayah.text}</p>
              </div>
              {translation[index] && (
                <p className="text-muted-foreground leading-relaxed pl-11">
                  {translation[index].text}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}