import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Play } from 'lucide-react';
import SampleGrid from '../components/SampleGrid';

const HomePage: React.FC = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Battle for Your <span className="text-yellow-300">Time</span>
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Visualize your remaining lifetime and discover how you're spending your most precious resource.
              </p>
              <Link 
                to="/visualize" 
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-100 transition-colors shadow-lg"
              >
                Start Your Visualization
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <SampleGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              {showVideo ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/4TMPXK9tw5U?si=AwTVX6pcQGJUHBAU&autoplay=1"
                  title="The Battle for Your Time - TED Talk by Dino Ambrosi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div 
                  className="absolute inset-0 bg-slate-900 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <img 
                    src="https://img.youtube.com/vi/4TMPXK9tw5U/maxresdefault.jpg"
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="relative z-10 text-center">
                    <div className="bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Play size={40} className="text-white ml-2" />
                    </div>
                    <h3 className="text-white text-xl font-semibold">Watch the TED Talk that inspired TimeGrid</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Visualize Your Time?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Clock size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perspective</h3>
              <p className="text-slate-600">See your entire life laid out in months, giving you a powerful perspective on how finite your time really is.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Clock size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Awareness</h3>
              <p className="text-slate-600">Understand where your time is going and confront the reality of how much screen time is consuming your life.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <Clock size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Change</h3>
              <p className="text-slate-600">Armed with this visualization, you can make intentional choices about how you spend your remaining time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Reality of Screen Time in India</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-teal-600 mb-2">7.3 hrs</p>
                <p className="text-slate-600">average daily screen time for Indians aged 16-64 (Source: DataReportal 2023)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-teal-600 mb-2">89%</p>
                <p className="text-slate-600">of Indians check their phones within 10 minutes of waking up (Source: Vivo-CMR Study)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-teal-600 mb-2">2.5 hrs</p>
                <p className="text-slate-600">daily time spent on social media by average Indian user (Source: DataReportal 2023)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-red-600 mb-2">27%</p>
                <p className="text-slate-600">of Indians feel they're addicted to their smartphones (Source: Vivo-CMR Study)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/visualize" 
            className="inline-flex items-center gap-3 bg-teal-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-600 transition-colors shadow-lg text-xl group"
          >
            Visualize Your Time
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;