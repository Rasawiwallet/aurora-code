export default function AuroraNightVideoPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020111] via-[#05051f] to-black" />

      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[60%] bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-[5%] right-[-10%] w-[60%] h-[50%] bg-purple-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-[10%] left-[20%] w-[50%] h-[40%] bg-green-400/10 blur-3xl rounded-full animate-pulse delay-500" />
      </div>

      {/* Moon */}
      <div className="absolute top-16 right-20 w-28 h-28 rounded-full bg-gray-100 shadow-[0_0_60px_rgba(255,255,255,0.8)] z-10">
        <div className="absolute top-3 left-5 w-5 h-5 bg-gray-300 rounded-full opacity-60" />
        <div className="absolute bottom-6 right-5 w-3 h-3 bg-gray-300 rounded-full opacity-50" />
      </div>

      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shoot-${i}`}
          className="absolute w-40 h-[2px] bg-gradient-to-r from-white to-transparent rotate-[-35deg] opacity-80 animate-shooting"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}

      {/* Descending Clouds */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-10 overflow-hidden">
        <div className="absolute bottom-0 left-[-10%] w-[60%] h-40 bg-white/10 blur-3xl rounded-full animate-cloud" />
        <div className="absolute bottom-10 right-[-10%] w-[50%] h-32 bg-white/10 blur-3xl rounded-full animate-cloud-slow" />
      </div>

      {/* Video Container */}
      <div className="relative z-20 rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(0,255,255,0.2)] backdrop-blur-md bg-black/30 p-3">
        <video
          className="w-[360px] h-[720px] max-w-[90vw] max-h-[90vh] object-cover rounded-2xl"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
          Browser kamu tidak mendukung video.
        </video>
      </div>

      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) rotate(-35deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(-1000px) translateY(400px) rotate(-35deg);
            opacity: 0;
          }
        }

        .animate-shooting {
          animation-name: shooting;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes cloudMove {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(60px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-cloud {
          animation: cloudMove 12s ease-in-out infinite;
        }

        .animate-cloud-slow {
          animation: cloudMove 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
