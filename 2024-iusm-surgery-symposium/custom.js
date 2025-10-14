document.addEventListener('DOMContentLoaded', (event) => {
  const questionContainers = document.querySelectorAll('.question');
  
  questionContainers.forEach(container => {
    const radioButtons = container.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        radioButtons.forEach(rb => rb.disabled = true);
      });
    });
  });
});