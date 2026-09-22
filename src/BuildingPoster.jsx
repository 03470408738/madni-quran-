import React from 'react'

export default function QuranInstitute() {
  return (
 <div className="bg-[#fdfaf3] text-gray-800 font-sans w-full min-h-screen">
      <div className="bg-[#0d3b2e] text-white text-center py-2 text-sm">
      {/* Top Bar */}
        📖 AL MUZAMMIL ONLINE QURAN INSTITUTE ✨ Learn the Quran – Improve Your Life
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-sm h-[200px] w-full">
        <img
          src="/IMG-20260920-WA0030.png"
          alt="Al Muzammil Logo"
          className="h-full w-auto object-contain object-left"
        />
        <a
          href="tel:03254645026"
          className="bg-[#0d3b2e] text-white px-5 py-2 rounded-full mr-4 text-sm font-bold shrink-0"
        >
          0325-4645026
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-6 w-full">
        <h2 className="text-5xl font-bold text-[#0d3b2e] leading-tight">
          گھر بیٹھے قرآن پاک کے نور سے <br /> اپنی زندگی کو روشن کریں
        </h2>
        <p className="mt-4 text-gray-600">Assalamu Alaikum! 🤍 Expert guidance with Allama Muzammil Madni</p>


<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: '15px',
  marginTop: '20px' 
}}>
 <div className="mt-8 flex justify-center gap-4">
          <a href="https://wa.me/923254645026" className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold">WhatsApp پر رابطہ کریں</a>
          <a href="#courses" className="border border-[#0d3b2e] px-8 py-3 rounded-full font-bold">

<button 
  onClick={() => window.open("https://www.facebook.com/share/19QciaL8yN/", "_blank")}
  style={{
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#1877F2',
    border: 'none',
    color: 'white',
    fontSize: '22px',
    cursor: 'pointer'
  }}
>
  f
</button></a>
        </div>



</div>  {/* <-- YE WALA TAG AAP SE MISS HO GAYA HAI, YE LAZMI LAGAO */}

</section> {/* Ab ye theek ho jayega */}

{/* CHALTI HUI PATTI - Red with Icon */}
<div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap font-bold">
  <p className="animate-marquee inline-block">
   🎓  Hamaray Pas Male & Female Epert Teachers Mojood Hain | Bachon Aur Baron Ke Liye Alag Alag Classes | 🎓 3 Days Free Trial Classes
  </p>
</div>

<style>{`
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 15s linear infinite;
  }
`}</style>



<section className="bg-white py-10 px-4">

  {/* Video ko chota karne ke liye ye div */}
<div className="w-full flex flex-col items-center py-6">
  <h2 className="text-xl font-bold mb-4"></h2>

  <div className="w-full max-w-[340px] bg-black rounded-xl overflow-hidden shadow-xl">
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full h-[400px] object-contain"
    >
      <source src="/video.mp4" type="video/mp4" />

  
    </video>
  </div>

 <h2 className="mt-6 font-bold text-xl">🌙 Welcome to AL MUZAMMIL ONLINE QURAN INSTITUTE 🌙</h2>


</div>
</section>

      {/* our Courses */}
      <section id="courses" className="bg-white py-14 px-8 w-full">
        <h3 className="text-3xl font-bold text-center mb-10">📚 Our Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
         ["Nazra Quran", "ناظرہ قرآن"],
["Tajweed-ul-Quran", "تجوید القرآن"],
["Hifz-ul-Quran", "حفظ القرآن"],
["Fardh Uloom", "فرض علوم"],
["Masnoon Duas", "مسنون دعائیں"],
["Qaida Nazra", "قاعدہ ناظرہ"],
["40 Hadith", "چالیس احادیث"],
          ].map(([en, ur]) => (
            <div key={en} className="border p-6 rounded-2xl text-center hover:shadow-lg transition">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-bold">{en}</h4>
              <p className="text-sm text-gray-500 mt-1">{ur}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Info */}
      <section className="bg-[#0d3b2e] text-white py-12 px-8 grid md:grid-cols-3 gap-8 text-center w-full">
        <div><p className="text-2xl">⏰</p><h4 className="font-bold mt-2">Class Timings</h4><p>04:00 AM - 11:00 PM</p></div>
        <div><p className="text-2xl">📍</p><h4 className="font-bold mt-2">Location</h4><p>Muslim Town, Lahore</p></div>
        <div><p className="text-2xl">👤</p><h4 className="font-bold mt-2">Teacher</h4><p>Allama Muzammil Madni</p></div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 w-full bg-[#fdfaf3]">
        <p className="font-bold">🌟Quran and teaches it to others.” 🌸
📖 If you want to learn the Holy Quran yourself,
or want your children to learn the Quran!</p>
  <a href="tel:03254645026" className="inline-block mt-4 bg-[#0d3b2e] text-white px-10 py-3 rounded-full">
          📞 Contact Now: 0325-4645026
        </a>
      
      </footer>
      </div>
      )
      }


