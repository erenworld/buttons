import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <nav class="relative left-0 right-0 flex mx-auto items-center justify-center w-96 my-5 py-3 border border-gray-200 rounded-lg">
      <ul class="flex gap-12 text-xs tracking-tighter text-[#1a1a1a]">
        <li><a href="" >BUTTONS</a></li>
        <li><a href="">MANIFESTO</a></li>
        <li><a href="">GITHUB</a></li>
      </ul>
    </nav>
    <section class="links mt-16 mx-7 sm:mx-24 md:mx-32 lg:mx-56 text-xs">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="px-4 pb-4 border border-gray-200 rounded-lg">
          <button class="my-4 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">Click me</button>
          <h2>Duolingo classic</h2>
          <p class="text-zinc-400">The art of letting go</p>
        </div>   
        <div class="px-4 pb-4 border border-gray-200 rounded-lg">
          <button class="my-4 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">Click me</button>
          <h2>Duolingo classic</h2>
          <p class="text-zinc-400">The art of letting go</p>
        </div>      
        <div class="px-4 pb-4 border border-gray-200 rounded-lg">
          <button class="my-4 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">Click me</button>
          <h2>Duolingo classic</h2>
          <p class="text-zinc-400">The art of letting go</p>
        </div>   
      </div>
    </section>
    
    <footer class="fixed bottom-0 left-0 right-0 flex mx-auto items-center justify-center w-96 my-5 py-3 border border-gray-200 rounded-lg">
      <ul class="flex gap-12 text-xs tracking-tighter text-[#1a1a1a]">
        <li><a href="" >EMAIL</a></li>
        <li><a href="">CONTACT</a></li>
        <li><a href="">PRIVACY</a></li>
      </ul>
    </footer>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
