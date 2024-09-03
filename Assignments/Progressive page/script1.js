document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download Webpage';
    downloadBtn.classList.add('download-link');
    document.querySelector('.content').appendChild(downloadBtn);

    downloadBtn.addEventListener('click', function() {
        const element = document.createElement('a');
        const htmlContent = document.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        element.href = url;
        element.download = 'pet_care_page.html';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        URL.revokeObjectURL(url);
    });
});
