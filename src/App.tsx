// import logo from "./assets/logo.png"

// export default function App() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative">
//       {/* Logo in the top left corner */}
//       <img src={logo} alt="Logo" className="absolute top-6 left-6 w-36" />

//       {/* Gradient text for the h1 */}
//       <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 via-blue-500 to-purple-500 leading-tight">
//       GloveGuardian Demo
// </h1>



//       <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
//         Experience the cutting-edge AI technology deployed on-site. Watch the demo to see how it transforms real-world scenarios.
//       </p>

//       <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-700">
//         <video className="w-full h-full" controls muted autoPlay loop>
//           <source src="/IMG_3404.MOV" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// }


import logo from "./assets/logo.png";
import HeroImage from "./assets/Hero Image.png";

export default function App() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Black Overlay ONLY over the background image */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo in the top left corner */}
      <img src={logo} alt="Logo" className="absolute top-6 left-6 w-36 z-10" />

      {/* Content inside the hero section */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 via-blue-500 to-purple-500 leading-tight">
          SafeLift Demo
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          Experience the cutting-edge AI technology deployed on-site. Watch
          the demo to see how it transforms real-world scenarios.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative z-10 w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <video className="w-full h-full" controls muted autoPlay loop>
          <source src="/result.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
