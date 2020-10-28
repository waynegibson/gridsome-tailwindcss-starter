<template>
  <div>
    <div class="max-w-full mx-auto px-4 py-10 bg-gray-200">
      <header
        class="max-w-4xl mx-auto flex justify-between items-center bg-green-100"
      >
        <nav>
          <g-link to="/">Home</g-link>
        </nav>
      </header>
    </div>

    <main class="min-h-screen">
      <slot />
    </main>

    <footer class="text-center py-10 bg-gray-200">
      <div class="">Footer</div>
    </footer>
  </div>
</template>
