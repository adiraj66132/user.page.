var typed = new Typed(".text", {
    strings: ["Programming", "Debugging", "Web Development", "Problem Solving", "Learning"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2500,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 800,
    cursorChar: '|',
    smartBackspace: true,
    cursorClassName: 'typed-cursor',
    // Enhanced cursor animations
    onCreateCursor: function(cursor) {
        cursor.style.animation = 'cursorBlink 1s ease-in-out infinite';
        cursor.style.textShadow = '0 0 8pxrgb(255, 255, 255)';
    },
    // Enhanced text animations with color transitions
    onStringTyped: function(arrayPos, self) {
        const cursor = self.cursor;
        const element = self.el;
        
        // Pulse animation for cursor
        cursor.style.animation = 'cursorExpand 0.4s ease-in-out';
        
        // Add glow effect to text
        element.style.textShadow = '0 0 10pxrgb(255, 255, 255)';
        element.style.transition = 'text-shadow 0.3s ease';
        
        // Reset animations
        setTimeout(() => {
            cursor.style.animation = 'cursorBlink 0.8s ease-in-out infinite';
            element.style.textShadow = 'none';
        }, 400);
    },
    // Add smooth start animation
    onStart: function(self) {
        self.el.style.opacity = '0';
        self.el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            self.el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            self.el.style.opacity = '1';
            self.el.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add required CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes cursorBlink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes cursorExpand {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(style);


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})