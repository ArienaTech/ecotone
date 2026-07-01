'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VIDEO_URL = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/ECOTONE.mp4';

export default function VideoSection() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  }

  return (
    <section style={{ position: 'relative', width: '100%', background: '#0a0a0a', lineHeight: 0 }}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          display: 'block',
          maxHeight: '60vh',
          objectFit: 'cover',
        }}
      />

      {/* Subtle gradient overlay — keeps text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom-left label */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '6%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '11px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          ECOTONE Arabia — Colour For Life Coatings
        </span>
      </div>

      {/* Mute toggle — prominent, bottom right */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '6%',
          background: muted ? 'rgba(255,255,255,0.95)' : 'rgba(45,106,79,0.95)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: '0',
          height: '48px',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          transition: 'background 0.2s ease',
          color: muted ? '#0a0a0a' : '#ffffff',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = muted ? '#ffffff' : '#1a4a35';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = muted ? 'rgba(255,255,255,0.95)' : 'rgba(45,106,79,0.95)';
        }}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        <span
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {muted ? 'Unmute' : 'Mute'}
        </span>
      </button>
    </section>
  );
}
