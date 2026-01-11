import { useState, useEffect } from 'react';

export const Countdown = () => {
  const targetDate = new Date('2026-08-02T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
      <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-gray-400 mt-2 text-sm md:text-base">{label}</div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
          Le compte à rebours est lancé
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">02 Août 2026 - Paouignan</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <TimeBlock value={timeLeft.days} label="Jours" />
          <TimeBlock value={timeLeft.hours} label="Heures" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>
    </section>
  );
};
