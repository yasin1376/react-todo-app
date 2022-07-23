import React from 'react'
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="https://thumbs.dreamstime.com/b/portrait-perfection-male-barber-care-mens-beauty-hair-beard-care-charismatic-macho-man-profile-look-guy-sexy-stylish-174493835.jpg" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Erin Lindford
              </p>
              <p class="text-slate-500 font-medium">
                Product Engineer
              </p>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
