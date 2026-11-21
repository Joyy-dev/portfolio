// joyy_dev - Blog Reading Experience & Code Copy
document.addEventListener('DOMContentLoaded', () => {
  // Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach((block) => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(168, 154, 255, 0.2);
      border: 1px solid rgba(168, 154, 255, 0.3);
      color: #F4F6FF;
      border-radius: 4px;
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    `;

    block.style.position = 'relative';
    block.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const code = block.querySelector('code')?.innerText || block.innerText;
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        copyBtn.textContent = 'Error';
      }
    });
  });
});
