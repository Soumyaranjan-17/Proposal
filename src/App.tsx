import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface ProposalCard {
  id: number;
  title: string;
  message: string;
  emoji?: string;
}

const proposalCards: ProposalCard[] = [
  {
    id: 1,
    title: "The Beginning",
    message: "From the moment we first met, I knew you were someone special. Your smile lit up the room and my heart skipped a beat.",
    emoji: "✨"
  },
  {
    id: 2,
    title: "Every Day With You",
    message: "Every morning I wake up grateful for another day to love you. You make the ordinary moments feel extraordinary.",
    emoji: "🌸"
  },
  {
    id: 3,
    title: "Your Beautiful Heart",
    message: "Your kindness, your laughter, the way you care for others... You have the most beautiful heart I've ever known.",
    emoji: "❤️"
  },
  {
    id: 4,
    title: "Our Dreams Together",
    message: "I dream of lazy Sunday mornings, adventures around the world, and growing old with you by my side.",
    emoji: "🥹"
  },
  {
    id: 5,
    title: "Forever and Always",
    message: "I want to be your partner in everything - your best friend, your biggest supporter, your love for all time.",
    emoji: "💕"
  }
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showProposal, setShowProposal] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNextCard = () => {
    if (currentCard < proposalCards.length - 1) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentCard(currentCard + 1);
        setIsVisible(true);
      }, 300);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setShowProposal(true);
        setIsVisible(true);
      }, 300);
    }
  };

  const handleProposalResponse = (response: string) => {
    if (response === 'yes') {
      setIsVisible(false);
      setTimeout(() => {
        setShowCelebration(true);
        setIsVisible(true);
      }, 300);
    }
  };

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-8 animate-bounce">
            <Heart className="w-24 h-24 text-rose-500 mx-auto fill-current" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-rose-600 mb-6 tracking-wide">
            She said
          </h1>
          <div className="text-8xl md:text-9xl font-bold text-rose-700 mb-8 tracking-wider animate-pulse">
            YES! 💍❤️
          </div>
          <div className="flex justify-center space-x-4 text-4xl animate-bounce">
            <span className="animate-pulse delay-100">🎉</span>
            <span className="animate-pulse delay-200">✨</span>
            <span className="animate-pulse delay-300">💕</span>
            <span className="animate-pulse delay-400">🥹</span>
            <span className="animate-pulse delay-500">🌸</span>
          </div>
          <p className="text-xl text-rose-600 mt-8 font-light max-w-2xl mx-auto leading-relaxed">
            The beginning of our forever starts now...
          </p>
        </div>
      </div>
    );
  }

  if (showProposal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
        <div className={`max-w-2xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-100">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 text-rose-400 mx-auto mb-6" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-rose-700 mb-8 tracking-wide">
              Will you marry me? 💍
            </h1>
            
            <p className="text-xl text-rose-600 mb-12 leading-relaxed font-light">
              You are my today and all of my tomorrows. I can't imagine life without you.
              Will you make me the happiest person alive?
            </p>
            
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => handleProposalResponse('yes')}
                className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Yes! ❤️
              </button>
              <button
                onClick={() => handleProposalResponse('no')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Not yet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const card = proposalCards[currentCard];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Progress indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {proposalCards.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentCard ? 'bg-rose-400' : 'bg-rose-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-100 text-center">
            <div className="mb-6">
              <span className="text-4xl">{card.emoji}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-rose-700 mb-8 tracking-wide">
              {card.title}
            </h2>
            
            <p className="text-lg md:text-xl text-rose-600 mb-12 leading-relaxed font-light">
              {card.message}
            </p>
            
            <button
              onClick={handleNextCard}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
            >
              <span>{currentCard === proposalCards.length - 1 ? 'Continue' : 'Next'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card counter */}
          <div className="text-center mt-6">
            <p className="text-rose-400 font-light">
              {currentCard + 1} of {proposalCards.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;