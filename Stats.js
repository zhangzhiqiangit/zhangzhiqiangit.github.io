var count_particles, stats, update;
count_particles = document.querySelector('.js-count-particles');
update = function() {    
    requestAnimationFrame(update);
};
requestAnimationFrame(update);